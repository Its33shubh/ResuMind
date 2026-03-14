let express = require('express')
let router = express.Router()

const authMiddleware = require('../middleware/authMiddleware')
// import controller file functions 
 
const {registerUser,loginUser} = require('../controllers/authController')

// making routes
//authentication routes
router.post('/register',registerUser)
router.post('/login',loginUser)


module.exports = router