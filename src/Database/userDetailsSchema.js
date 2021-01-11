//Libraries
const mongoose = require('mongoose');

//Schema for questions
    const userDetailsSchema = new mongoose.Schema({
        username:String,
        lastQuiz: String,
        picture :String,
        topQuiz:  Number,
        achievement: String,
        level: String,
    })

//export it for using in other files
exports.userDetailsSchema = userDetailsSchema;