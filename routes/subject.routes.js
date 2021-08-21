const router = require('express').Router()
const {
  getAllSubjects,
  addSubject,
  subjectInfo,
  updateSubject,
  deleteSubject,
  addReview,
  editReviewSubject,
  deleteReviewSubject,
} = require('../controllers/subject.controller')
const multer = require('multer')
const upload = multer()

//user display: 'block'
router.get('/', getAllSubjects)
router.post('/', upload.single('file'), addSubject)
router.get('/:id', subjectInfo)
router.put('/:id', updateSubject)
router.delete('/:id', deleteSubject)

// reviews
router.patch('/review/:id', addReview)
router.patch('/edit-review/:id', editReviewSubject)
router.patch('/delete-review/:id', deleteReviewSubject)

module.exports = router
