module.exports.signUpErrors = (err) => {
    let errors = { pseudo: '', email: '', password: '' }

    if (err.message.includes('pseudo'))
        errors.pseudo = 'Pseudo already taken or incorrect.'

    if (err.message.includes('email')) errors.email = 'Email incorrect.'

    if (err.message.includes('password'))
        errors.password = 'The password must have more than 6 characters.'

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('pseudo'))
        errors.pseudo = 'Pseudo already taken.'

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email'))
        errors.email = 'Email already taken.'

    return errors
}

module.exports.signInErrors = (err) => {
    let errors = { email: '', password: '' }

    if (err.message.includes('email'))
        errors.email = 'Email unknown'

    if (err.message.includes('password'))
        errors.password = 'The password doesn\'t match'

    return errors
}

module.exports.uploadErrors = (err) => {
    let errors = { format: '', maxSize: '' }

    if (err.message.includes('invalid file'))
        errors.format = 'Wrong file type'

    if (err.message.includes('max size'))
        errors.maxSize = 'The file is too big (more than 500ko)'

    return errors
}