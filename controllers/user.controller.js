const UserModel = require('../models/User')
const ObjectID = require('mongoose').Types.ObjectId

module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select('-password')
  res.status(200).json(users)
}

module.exports.userInfo = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown: ' + req.params.id)

  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs)
    else console.log('ID unknown: ' + req.params.id)
  }).select('-password')
}

module.exports.updateUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown: ' + req.params.id)

  try {
    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          bio: req.body.bio,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        if (!err) return res.send(docs)
        if (err) return res.status(500).json({ message: err })
      }
    )
  } catch (err) {
    return res.status(500).json({ message: err })
  }
}

module.exports.updateEmail = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown: ' + req.params.id)

  try {
    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          email: req.body.email,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        if (!err) return res.send(docs)
        if (err) return res.status(500).json({ message: err })
      }
    )
  } catch (err) {
    return res.status(500).json({ message: err })
  }
}

module.exports.updateAdmin = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown: ' + req.params.id)

  try {
    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          admin: req.body.admin,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        if (!err) return res.send(docs)
        if (err) return res.status(500).json({ message: err })
      }
    )
  } catch (err) {
    return res.status(500).json({ message: err })
  }
}

module.exports.deleteUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown: ' + req.params.id)

  try {
    await UserModel.remove({ _id: req.params.id }).exec()
    res.status(200).json({ message: 'Succesfully deleted.' })
  } catch (err) {
    return res.status(500).json({ message: err })
  }
}
