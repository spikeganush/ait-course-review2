const router = require('express').Router()
const {
  getAllCourses,
  addCourse,
  courseInfo,
  updateCourse,
  deleteCourse,
} = require('../controllers/course.controller')
const multer = require('multer')
const upload = multer()

//user display: 'block'
router.get('/', getAllCourses)
router.post('/', upload.single('file'), addCourse)
router.get('/:id', courseInfo)
router.put('/:id', updateCourse)
router.delete('/:id', deleteCourse)

module.exports = router
