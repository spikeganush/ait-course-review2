const SubjectModel = require('../models/Subject')
const ObjectID = require('mongoose').Types.ObjectId
const fs = require('fs')
const { promisify } = require('util')
const pipeline = promisify(require('stream').pipeline)
const { uploadErrors } = require('../utils/errors.utils')

module.exports.getAllSubjects = async (req, res) => {
  const Subjects = await SubjectModel.find()
  res.status(200).json(Subjects)
}

exports.addSubject = async (req, res) => {
  let fileName
  let chargeName

  if (req.file !== null) {
    try {
      if (
        req.file.detectedMimeType != 'image/jpg' &&
        req.file.detectedMimeType != 'image/png' &&
        req.file.detectedMimeType != 'image/jpeg'
      )
        throw Error('invalid file')

      if (req.file.size > 500000) throw Error('max size')
    } catch (err) {
      const errors = uploadErrors(err)
      return res.status(201).json({ errors })
    }
    chargeName = req.body.title
    fileName = chargeName.replace(/\s/g, '') + Date.now() + '.jpg'

    await pipeline(
      req.file.stream,
      fs.createWriteStream(
        `${__dirname}/../client/public/uploads/course-subject/${fileName}`
      )
    )
  }

  const newSubject = new SubjectModel({
    title: req.body.title,
    code: req.body.code,
    course: req.body.course,
    summarize: req.body.summarize,
    description: req.body.description,
    photo: './uploads/course-subject/' + fileName,
  })

  try {
    const subject = await newSubject.save()
    return res.status(201).json(subject)
  } catch (err) {
    return res.status(400).send(err)
  }
}

module.exports.subjectInfo = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown: ' + req.params.id)

  SubjectModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs)
    else console.log('ID unknown: ' + req.params.id)
  })
}

module.exports.updateSubject = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown: ' + req.params.id)

  try {
    await SubjectModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          code: req.body.code,
          course: req.body.course,
          summarize: req.body.summarize,
          description: req.body.description,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        if (!err) return res.send(docs)
        if (err) {
          res.status(500).json({
            success: false,
            error: err.message,
          })
        }
      }
    )
  } catch (err) {
    return res.status(500).json({ message: err })
  }
}

module.exports.deleteSubject = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown: ' + req.params.id)

  try {
    await SubjectModel.remove({ _id: req.params.id }).exec()
    res.status(200).json({ message: 'Succesfully deleted.' })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    })
  }
}
