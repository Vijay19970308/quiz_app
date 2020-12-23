const mongoose = require('mongoose');

const questionSchema = require('./Schema/QuestionSchema.js');

const uri ='mongodb+srv://Mydbuser:Vijay@1234@cluster0.jooug.mongodb.net/QuizDatabase?retryWrites=true&w=majority';
const connectDB = async()=>{
        await mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology: true});
        console.log("connected"); 
    }  
let QuestionModel = mongoose.model('QuestionCollection',questionSchema);

module.exports = QuestionModel; 