const User = require('../models/users')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


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
            /*console.log(name,email,password)*/
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
           res.status(201).json({
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


exports.loginUser = async (req,res) =>{
    try {
// 1. Get email and password from request body
// 2. Check if fields are empty
// 3. Convert email to lowercase
// 4. Check if user exists in database
// 5. Compare password with hashed password
// 6. Generate JWT token
// 7. Send login success response
// 8. Handle server error


        // 1. Get email and password from request body
        let {email,password} = req.body
        console.log(email,password  )

        // 2. Check if fields are empty
        if (!email|| !password){
            return res.status(400).json({
                success:false,
                message:"All fields are require"
            })
        }
        // 3. Convert email to lowercase
        email = email.toLowerCase()

        // 4. Check if user exists in database
        let user = await User.findOne({email})

        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }

        // 5. Compare password with hashed password

        let ComparePassword = await bcrypt.compare(password,user.password)

        if (!ComparePassword){
            return res.status(401).json({
                success:false,
                message:"Invalid password"
            })
        }

        // 6. Generate JWT token

        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )

        // 7. Send login success response
        res.status(200).json({
            success:true,
            message:"User Login successfully",
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }
        })

    } catch (err) {
        res.status(500).json({
            success:false,
            message:"Server error",
            error: err.message
        })
    }
}