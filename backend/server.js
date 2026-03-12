const express = require("express")
const cors = require("cors")
require("dotenv").config()
const connectDB = require('./config/db')
const authRoutes = require('./routes/authroutes')
// app variable 
const app = express()
// connect db
connectDB()

// Port variable 
const PORT = process.env.PORT || 5000
// middleware 

app.use(cors())
app.use(express.urlencoded({ extended: true }));

// routes 
app.get('/',(req,res)=>{
    res.send("ResuMind is Running")
})

app.use('/api/auth', authRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})