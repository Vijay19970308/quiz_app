const mongoose = require('mongoose');

const {timerSchema} = require('./TimerSchema');

const uri ='mongodb+srv://Mydbuser:Vijay@1234@cluster0.jooug.mongodb.net/QuizDatabase?retryWrites=true&w=majority';
const connectDB = async()=>{
        await mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology: true});
        console.log("connected"); 
    }  
let timerModel = mongoose.model('TimerCollection',timerSchema);

exports.timerModel = timerModel;