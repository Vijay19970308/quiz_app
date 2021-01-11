//Libraries

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


//Models
const {Questions} = require('./Questions');
const {timerModel} = require('./TimerModel');
const {userModel} = require("./UserModel");
const {userDetailsModel} = require("./userDetailsModel");
const {Data} = require('./Data');
const port = 9000;

//MiddleWare
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

//Endpoints

//------------------------------------------------//
//---------------UserModel------------------------//
//------------------------------------------------//

//-----------Get All the users-------------------//

function Check(Value)
{
  if(Value===undefined || Value===null)
  {
    return true;
  }
  else
  {
     return false;
  }
}
app.get('/abc', async (req,resp)=>{
  try
  {
    const result = await userModel.find();
    console.log(result);
    resp.send(result);
  }
  catch(error)
  {
    resp.status(404).send(error.message);
  }
})

//Checking for userData
app.post('/LogIn',async (req,resp)=>{
  
    try
    {
        const {username,password}=req.body;
        if(username==="")
        {
          resp.status(401).send({message:"Please Type Username!!!"});
        }

        else if(password==="")
        {
          resp.status(401).send({message:"Please Type Password!!!"});
        }
        else
        {
              const result= await userModel.findOne({username,
              password});
              if(Check(result))
              {
                resp.status(401).send({message:"Username and Password Invalid!!!"});
              }
              else
              {
                resp.status(200).send(result); 
              }
        }
    }
    catch(error) 
    {
      resp.send({message:error.message});
    }
})

//Creating new user
app.post('/signIn', async(req,resp)=>{
  if(req.body.username==="")
  {
     resp.status(401).send({message:"Please Type Username!!!"});
  }
  else if(req.body.username==="")
  {
     resp.status(401).send({message:"Please Type password!!!"});
  }
  else if(req.body.cell==="")
  {
    resp.status(401).send({message:"Please Type phone!!!"});
  }
  else
  {
    const newModel = new userModel();
    newModel.username=req.body.username;
    newModel.password=req.body.password;
    newModel.Phone = Number(req.body.cell);
    const userDetail = new userDetailsModel();
    userDetail.username = req.body.username;
    userDetail.lastQuiz = "";
    userDetail.topQuiz =0;
    userDetail.picture="";
    userDetail.achievement="";
    userDetail.level="Beginnner";
    try{
        await newModel.save();
        await userDetail.save();
        console.log(userDetail);
        resp.status(201).send(newModel);
    }catch(e)
    {
        console.log(e.message);
    }
  }
})

//updating username

app.put('/UpdateUN', async(req,resp)=>{
    const RequestedUsername = req.headers.username;
    const RequestedNewUsername =req.headers.nusername;
  
    if(Check(RequestedUsername)||Check(RequestedNewUsername))
    {
      resp.status(401).send({message:"Type usename correctly!!"});
      return;
    }
    else 
    {   
      try{  
            const result = await userModel.findOne({username:RequestedNewUsername});
            if(result)
            {
              resp.status(401).send({message:"Username is already present!!!"});
              return;   
            }
            else
            {
              const result1 = await userModel.findOneAndUpdate({username:RequestedUsername},{username:RequestedNewUsername},{useFindAndModify:true,new:true});
              resp.send(result1); 
              return;           
            }
          }
          catch(e)
          {
              resp.send({message:e.message});
          }
   }
})
//update password
app.put("/updatePWD",async (req,resp)=>{
  const RequestedUsername = req.headers.username;
  const RequestedOldPassword =req.headers.oldpassword;
  const RequestedNewPassword =req.headers.newpassword;
  if(Check(RequestedUsername))
  {
    resp.send({message:"Type usename correctly!!!"});
    return;
  }
  if(Check(RequestedNewPassword)||Check(RequestedOldPassword)||RequestedNewPassword===""){
    resp.send({message:"Type Password correctly!!!"});
    return;
  }
  if(RequestedNewPassword===RequestedOldPassword)
  {
    resp.send({message:"Both passwords are same!!!"});
    return;
  }
  try{  
    const result = await userModel.findOne({username:RequestedUsername});
    if(result)
    {
      if(result.password!==RequestedOldPassword)
      {
        resp.send({message:"Type Old Password correctly!!!"});
        return;
      }
      const result1 = await userModel.findOneAndUpdate({username:RequestedUsername},{password:RequestedNewPassword},{useFindAndModify:false,new:true});
      resp.send(result1); 
      return;    
    }
    else
    {
        resp.send({message:"Username is not Present!!!"}); 
    }
  }
  catch(e)
  {
      resp.send({message:e.message});
  }
  
})

//update Phone Number
app.put("/updatePhN",async (req,resp)=>{
  const RequestedUsername = req.headers.username;
  const RequestedOldPhone =Number(req.headers.oldphone);
  const RequestedNewPhone =Number(req.headers.newphone);
  if(Check(RequestedUsername))
  {
    resp.send({message:"Type usename correctly!!!"});
    return;
  }
  if(Check(RequestedNewPhone)||Check(RequestedOldPhone)||RequestedNewPhone===0|| isNaN(RequestedNewPhone)||isNaN(RequestedOldPhone)){
    resp.send({message:"Type Phone Number correctly!!!"});
    return;
  }
  if(RequestedNewPhone===RequestedOldPhone)
  {
    resp.send({message:"Both Phone Numbers are same!!!"});
    return;
  }
  try{  
    const result = await userModel.findOne({username:RequestedUsername});
    if(result)
    {
      if(result.Phone!==RequestedOldPhone)
      {
        resp.send({message:"Type Old Phone correctly!!!"});
        return;
      }
      const result1 = await userModel.findOneAndUpdate({username:RequestedUsername},{Phone:RequestedNewPhone},{useFindAndModify:false,new:true});
      resp.send(result1); 
      return;    
    }
    else
    {
        resp.send({message:"Username is not Present!!!"}); 
    }
  }
  catch(e)
  {
      resp.send({message:e.message});
  }
  
})

//----------------------------------------------------//
//---------------QuestionModel-----------------------//
//--------------------------------------------------//

//get Question timers
app.post("/AllTimers", async(req,resp)=>{
    try
    {
      if(Check(req.body.username))
      {
        resp.status(404).send({message:"Username not found!!!"});
      }
      else{
        const result = await timerModel.find({username:req.body.username});
        resp.send({result:result});
      }
    }catch(e)
    {
      resp.status(404).send({message:e.message});
    }
})

app.put("/UpdateTimer", async(req,resp)=>{
  try
    {
      if(Check(req.body._id))
      {
        resp.status(404).send({message:"Quiz not found!!!"});
      }
      else{
        const result = await timerModel.findOneAndUpdate({_id:req.body._id},{score:req.body.score},{useFindAndModify:false,new:true});
        if(result!=null)
        {
        resp.status(201).send({message:"Submitted!!!"});
        }else{
          resp.status(404).send({message:"Quiz not found"});
        }
      }
    }catch(e)
    {
      resp.status(404).send({message:e.message});
    }
})

app.post("/AddTimer", async(req,resp)=>{
  try
    {
      const result = await timerModel.findOne({username:req.body.username,startTime:req.body.startTime});
      if(result!==null)
      {
        resp.status(404).send({message:"Already Scheduled!!!"});
        return;
      }
      if(Check(req.body.username)||req.body.username==="")
      {
        resp.status(404).send({message:"Sign in!!!"});
      }
      else if(Check(req.body.type)||req.body.type==="")
      {
        resp.status(404).send({message:"Select type of question!!!"});
      }
      else if(Check(req.body.number)||req.body.number==="")
      {
        resp.status(404).send({message:"Select Number of questions!!!"});
      }
      else if(Check(req.body.timeTotal)||req.body.timeTotal==="")
      {
        resp.status(404).send({message:"Select total time!!!"});
      }
      else if(Check(req.body.level)||req.body.level==="")
      {
        resp.status(404).send({message:"Select level of questions!!!"});
      }
      else if(Check(req.body.startTime)||req.body.startTime==="")
      {
        resp.status(404).send({message:"Choose Quiz Time!!!"});
      }
      else{
        const Timer = new timerModel();
        Timer.username = req.body.username;
        Timer.type = req.body.type;
        Timer.number = Number(req.body.number);
        Timer.timeTotal = Number(req.body.timeTotal);
        Timer.level = Number(req.body.level);
        Timer.startTime = req.body.startTime; 
        Timer.score=-1;
           await Timer.save();
           resp.sendStatus(200);
      }
    }catch(e)
    {
      resp.status(404).send({message:e.message});
    }
 
});

app.delete("/DeleteTimer",async(req,res)=>{
   if(Check(req.body.id))
   {
     res.status(404).send({message:"Quiz is not defined"});
   }
   else
   {
     try{
       
          const requestedId =req.body.id;
          const result=await timerModel.findOneAndRemove({_id:requestedId},{useFindAndModify:false,new:true});
          if(result===null)
          {
             res.status(404).send({message:"Quiz is not found"});
          }
          else{
          res.status(201);
          }
     }catch(e){
      console.log(e.message);
       res.status(404).send({message:e.message});
     }
   }
   
});
//get Questions
app.post("/fetchQuestion",async(req,resp)=>{
  const type = req.body.type;
  const number = Number(req.body.number);
  //const timeTotal = Date(req.headers.totalTime);
  const level = Number(req.body.level);
  //const startTime = Date(req.headers.startTime);
   try
   {
    //console.log(type+req.body.number+""+level);
     //const result = await Questions.find().aggregate([
     //  {$match:{questionType:type,questionLevel:level}},
     //  { $limit: number }
     //]) 
     resp.status(200).send({result:Questions});
   }
   catch(e)
   {
     resp.status(404).send({message:e.message});
   }
})

app.post("/getUserDetails", async(req,res)=>{
   if(Check(req.body.username))
   {
     res.status(404).send({message:"user could not found!!!"});
   }
   else
   {
     const result = await userDetailsModel.findOne({username:req.body.username});
     if(result===null)
     {
      res.status(404).send({message:"user could not found!!!"});
     }
     else
     {
       res.status(201).send({result:result});
     }
   }
});
app.listen(port, () => console.log(`App listening on port ${port}!`));
module.exports = app; 