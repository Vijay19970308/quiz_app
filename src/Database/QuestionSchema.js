//Libraries
const mongoose = require('mongoose');

//Schema for questions
    const questionSchema = new mongoose.Schema({
        questionType:String,
        questionId:mongoose.Schema.Types.ObjectId,
        questionDescription:String,
        questionOption:String,
        questionAnswer:String
    })

//export it for using in other files
module.exports = questionSchema; 