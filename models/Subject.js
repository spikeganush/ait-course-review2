const mongoose = require('mongoose')

const SubjectSchema = new mongoose.Schema(
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
    course: {
      type: [String],
      required: [true, 'Please provide an subject'],
      trim: true,
    },
    summarize: {
      type: String,
      required: [true, 'Please provide a summarize'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
      trim: true,
    },
    photo: {
      type: String,
      default: './uploads/profil/random-user.png',
    },
    reviews: {
      type: [
        {
          reviewerId: String,
          reviewerUsername: String,
          reviewText: String,
          reviewMark: Number,
          timestamp: Number,
        },
      ],
    },
  },
  {
    timestamps: true,
  }
)

const Subject = mongoose.model('Subject', SubjectSchema)

module.exports = Subject
