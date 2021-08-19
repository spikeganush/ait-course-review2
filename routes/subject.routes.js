const router = require('express').Router()
const {
  getAllSubjects,
  addSubject,
  subjectInfo,
  updateSubject,
  deleteSubject,
  addReview,
  editReview,
  deleteReview,
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
router.patch('/edit-review/:id', editReview)
router.patch('/delete-review/:id', deleteReview)

module.exports = router
