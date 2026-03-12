const mongoose = require("mongoose")

let connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.URL)
        console.log('db connected successfully');
        
    } catch (error) {
        console.error("Database connection error:", error.message)
        process.exit(1)
    }
}

module.exports = connectDB