const {default : mongoose } = require('mongoose');
const Schema = mongoose.Schema;
const blogModel = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    blog:{
        type:String,
        required:true
    },
    like:{
        type:Number,
        default:0
    },
    dislike:{
        type:Number,
        default:0
    },
    person:{type:Schema.Types.String, ref:'users'}

},{timestamps:true})

export const blogSchema = mongoose.models.workouts || mongoose.model("workouts",blogModel);

