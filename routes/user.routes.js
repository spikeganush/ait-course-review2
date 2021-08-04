const router = require('express').Router()
const {
  getAllUsers,
  userInfo,
  updateUser,
  updateEmail,
  updateAdmin,
  deleteUser,
} = require('../controllers/user.controller')
const uploadController = require('../controllers/upload.controller')
const multer = require('multer')
const upload = multer()

//user display: 'block'
router.get('/', getAllUsers)
router.get('/:id', userInfo)
router.put('/:id', updateUser)
router.put('/email/:id', updateEmail)
router.put('/admin/:id', updateAdmin)
router.delete('/:id', deleteUser)

//upload
router.post('/upload', upload.single('file'), uploadController.uploadProfil)

module.exports = router
