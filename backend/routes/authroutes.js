let express = require('express')
let router = express.Router()

// import controller file functions 
 
const {registerUser} = require('../controllers/authController')

// making routes

router.post('/register',registerUser)

module.exports = router