const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title'],
      trim: true,
    },
    code: {
      type: String,
      required: [true, 'Please provide an code'],
      trim: true,
    },
    summarize: {
      type: String,
      required: [true, 'Please provide a summarize'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
      trim: true,
    },
    photo: {
      type: String,
      required: [true, 'Please provide a photo'],
    },
  },
  {
    timestamps: true,
  }
)

const Course = mongoose.model('Course', CourseSchema)

module.exports = Course
