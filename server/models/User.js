const mongoose  = require("mongoose")


const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        min: 8,
        required:true,
    },
    users:{
        type:Array,
        default:[]
    },
   
})


module.exports = mongoose.model("User",UserSchema)
