const mongoose =require("mongoose")

const userSchema =new mongoose.Schema({

    username:{
        type:String,
        unique:[true,"username already taken"],
        require:true,
    },
    email:{
        type:String,
        unique:[true,"email already taken"],
        required:true,

    },
    password:{
        type:String,
        required:true,

    }
})

const userModel = mongoose.model("user",userSchema)
module.exports =userModel