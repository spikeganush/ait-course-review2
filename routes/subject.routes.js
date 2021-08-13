const router = require('express').Router()
const {
  getAllSubjects,
  addSubject,
  subjectInfo,
  updateSubject,
  deleteSubject,
} = require('../controllers/subject.controller')
const multer = require('multer')
const upload = multer()

//user display: 'block'
router.get('/', getAllSubjects)
router.post('/', upload.single('file'), addSubject)
router.get('/:id', subjectInfo)
router.put('/:id', updateSubject)
router.delete('/:id', deleteSubject)

//upload
// router.post('/upload', upload.single('file'), uploadController.uploadProfil)

module.exports = router
