let mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },

    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true,
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"]
    },

    password:{
        type:String,
        required:true,
        minlength:[6,"Password must be at least 6 characters"],
    },

    profileImage:{
        type:String,
        default:""
    },

    headline:{
        type:String,
        default:""
    },

    bio:{
        type:String,
        default:""
    },

    skills:[
        {
            type:String
        }
    ],

    location:{
        type:String,
        default:""
    },

    github:{
        type:String,
        default:""
    },

    linkedin:{
        type:String,
        default:""
    },

    portfolio:{
        type:String,
        default:""
    }
},{
    timestamps:true
})

module.exports = mongoose.model("User", userSchema)