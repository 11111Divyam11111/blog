
const mongoose = require('mongoose');


const userModel = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    blog:[{type:mongoose.Schema.Types.ObjectId , ref:"workouts"}]
    // Add more fields as needed
},{timestamps:true});

export const userSchema = mongoose.models.users || mongoose.model("users",userModel);

