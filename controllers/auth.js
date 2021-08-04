const crypto = require('crypto')
const User = require('../models/User')
const ErrorResponse = require('../utils/ErrorResponse')
const sendEmail = require('../utils/sendEmail')

//   Register user
exports.register = async (req, res, next) => {
  const { username, email, password } = req.body

  try {
    const user = await User.create({
      username,
      email,
      password,
    })

    sendToken(user, 201, res)
  } catch (err) {
    next(err)
  }
}

exports.login = async (req, res, next) => {
  const { email, password } = req.body

  //Check if email and password are provided
  if (!email || !password)
    return next(new ErrorResponse('Please provide an email and password', 400))
  try {
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
      return next(new ErrorResponse('Invalid credentials', 401))
    }

    const isMatch = await user.matchPasswords(password)

    if (!isMatch) {
      return next(new ErrorResponse('Wrong password', 401))
    }

    sendToken(user, 200, res)
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    })
  }
}

exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body

  try {
    const user = await User.findOne({ email })

    if (!user) {
      return next(new ErrorResponse('Email could not be sent', 404))
    }

    const resetToken = user.getResetPasswordToken()

    await user.save()

    // Create reset url to email to provided email
    const resetUrl = `http://localhost:3000/resetpassword/${resetToken}`

    // HTML Message
    const message = `
      <h1>You have requested a password reset</h1>
      <p>You have asked to reset your password for our Website <a href="https://ait-course-review.netlify.app" target="_blank">Ait course review</a></p>
      <p>Please follow this link to create a new password for your account:</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `
    try {
      await sendEmail({
        to: user.email,
        subject: 'Password Reset Request',
        text: message,
      })

      res.status(200).json({ success: true, data: 'Email Sent' })
    } catch (err) {
      console.log(err)

      user.resetPasswordToken = undefined
      user.resetPasswordExpire = undefined

      await user.save()

      return next(new ErrorResponse('Email could not be sent', 500))
    }
  } catch (err) {
    next(err)
  }
}

exports.resetPassword = async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.params.resetToken)
    .digest('hex')

  try {
    console.log('Token: ' + resetPasswordToken)
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    })

    if (!user) {
      return next(new ErrorResponse('Invalid reset Token', 400))
    }

    user.password = req.body.password
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined

    await user.save()

    res.status(201).json({
      success: true,
      data: 'Password reset success',
    })
  } catch (err) {
    next(err)
  }
}

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken()
  res.status(statusCode).json({
    success: true,
    token,
  })
}
