//Libraries
const mongoose = require('mongoose');

//Schema for questions
    const timerSchema = new mongoose.Schema({
        username:String,
        type : String,
        number:  Number,
        timeTotal: Number,
        level: Number,
        startTime:String,
        score:Number
    })

//export it for using in other files
exports.timerSchema = timerSchema;