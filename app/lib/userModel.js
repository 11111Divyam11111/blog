
const mongoose = require('mongoose');



const userModel = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
        unique:true

    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    blog:[{type:mongoose.Schema.ObjectId , ref:"workouts"}]
    // Add more fields as needed
},{timestamps:true});

export const userSchema = mongoose.models.users || mongoose.model("users",userModel);

