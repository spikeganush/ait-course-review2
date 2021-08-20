const router = require('express').Router()
const {
  getAllCourses,
  addCourse,
  courseInfo,
  updateCourse,
  deleteCourse,
  review,
  addReview,
  editReview,
  deleteReview,
} = require('../controllers/course.controller')
const multer = require('multer')
const upload = multer()

//user display: 'block'
router.get('/', getAllCourses)
router.post('/', upload.single('file'), addCourse)
router.get('/:id', courseInfo)
router.put('/:id', updateCourse)
router.delete('/:id', deleteCourse)

// reviews
router.patch('/review/:id', addReview)
router.patch('/edit-review/:id', editReview)
router.patch('/delete-review/:id', deleteReview)

module.exports = router
