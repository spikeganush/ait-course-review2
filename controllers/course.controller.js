const CourseModel = require('../models/Course')
const { uploadErrors } = require('../utils/errors.utils')
const ObjectID = require('mongoose').Types.ObjectId
const fs = require('fs')
const { promisify } = require('util')
const pipeline = promisify(require('stream').pipeline)

module.exports.getAllCourses = async (req, res) => {
  const courses = await CourseModel.find()
  res.status(200).json(courses)
}

exports.addCourse = async (req, res) => {
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

  const newCourse = new CourseModel({
    title: req.body.title,
    code: req.body.code,
    summarize: req.body.summarize,
    description: req.body.description,
    photo: './uploads/course-subject/' + fileName,
  })

  try {
    const course = await newCourse.save()
    return res.status(201).json(course)
  } catch (err) {
    return res.status(400).send(err)
  }
}

module.exports.courseInfo = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown: ' + req.params.id)

  CourseModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs)
    else console.log('ID unknown: ' + req.params.id)
  })
}

module.exports.updateCourse = async (req, res) => {
  let fileName

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
    fileName = req.body.title + Date.now() + '.jpg'

    await pipeline(
      req.file.stream,
      fs.createWriteStream(
        `${__dirname}/../client/public/uploads/course-subject/${fileName}`
      )
    )
  }

  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown: ' + req.params.id)
  if (req.file !== null) {
    try {
      await CourseModel.findOneAndUpdate(
        req.params.id,

        {
          $set: {
            title: req.body.title,
            code: req.body.code,
            summarize: req.body.summarize,
            description: req.body.description,
            photo: req.body.file,
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
  } else {
    try {
      await CourseModel.findOneAndUpdate(
        req.params.id,

        {
          $set: {
            title: req.body.title,
            code: req.body.code,
            summarize: req.body.summarize,
            description: req.body.description,
            photo: req.body.existingFile,
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
}

module.exports.deleteCourse = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown: ' + req.params.id)

  CourseModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs)
    else console.log('Delete error : ' + err)
  })
}
