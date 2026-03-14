let express = require('express')
let router = express.Router()

const authMiddleware = require('../middleware/authMiddleware')
// import controller file functions 

const {getUserProfile,updateUserProfile} = require ('../controllers/userController')

// user profile routes
router.get('/profile',authMiddleware,getUserProfile)
router.put('/profile',authMiddleware,updateUserProfile)

module.exports = router