const User = require('../models/users')
const bcrypt = require("bcryptjs");


exports.registerUser = async (req,res) =>{
    try{
// 1. Get user input and check is null
// 2.  check  email or user exist 
// 3. hash password 
// 4. crate new user 
// 5. save the new user
// 6. send success message 
// 7. handel sever error

        
            let {name,email,password}= req.body
                console.log(name,email,password)
            // 1. check is null
            if (!name||!email||!password){
                return res.status(400).json({
                    success:false,
                    message:"All fields are require"
                })
            }
            
            email= email.toLowerCase()
            // 2. check  email or user exist 
            let userExist = await User.findOne({email})

            if (userExist){
                return res.status(400).json({
                    success:false,
                    message:'User already Exists'
                })
            }

            // 3. hash password 
            let hashedPassword = await bcrypt.hash(password,10)

            // 4. create new user 

            let user = new User({
                name,
                email,
                password:hashedPassword
            })
            // 5. save user 
            await user.save();

            //6. send success message 
           res.status(200).json({
            success:true,
            message:' user register successfully'
           }) 

    }   // 7. server error handling
    catch(err){
        res.status(500).json({
            success: false,
            message: "Server error",
            error: err.message
        });
    }
}