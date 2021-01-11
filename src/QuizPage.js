import React, { useState,useEffect } from 'react';
import "./QuizPage.css";
import Score from "./Score";
function QuizPage(props){
  const [QNo, setQNo]=useState(0);
  const [score, setScore]=useState(props.score===-1?0:props.score);
  const [QLevel,setQLevel]=useState("");
  const [Time,SetTime]=useState(props.time);
  const [Description,setDescription]=useState("");
  const [error,setError]=useState(undefined);
  const [submitted,setSubmit]=useState(false);
  const [OptionA,setOptionA]=useState("");
  const [OptionB,setOptionB]=useState("");
  const [OptionC,setOptionC]=useState("");
  const [OptionD,setOptionD]=useState("");
  const [colorId,setColor]=useState("");
  const [answers,setAnswer]=useState([]);
  const totalNumber=props.questions.length-1;
  let Ans=[];
  let intervalId="";
  const checkScore = (event)=>{
    setColor(event.target.id);
    if(answers.length!==0)
    {
       Ans = [...answers];     
    }
    if(event.target.id===props.questions[QNo].answerOption)
    {
      Ans[QNo]=1;
    }
    else{
      Ans[QNo]=0;
    }
    setAnswer([...Ans]);
  };
  const submit =async ()=>{
    let sum=0;
    answers.forEach((item)=>{
      if(!isNaN(item))
      sum = sum+item;
    })
     setScore(sum);
    await fetch("http://localhost:9000/UpdateTimer",{
      method:"PUT",
      headers:{
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin':'*',
      },
      body:JSON.stringify({
         _id:props.id,
         score:sum,
      })
      }).then((r)=>{
        if(r.ok){
          return{ success:true};
        }
        else{
           return r.json();
        }
      }).then((r)=>{
        if(r.success===true){
          setSubmit(true);
       }
       else{
          setError(r.message);
       }
    });  
     
  };
  const next=(()=> {
    if(QNo<totalNumber)
    {
       setQNo(QNo+1);
       setColor("");
    }
    console.log(answers);
  });
  const prev=(()=> {
    if(QNo>0)
    {
      setQNo(QNo-1);
      setColor("");
    }
    
  });
  useEffect(()=>{
    if(intervalId==="")
     {
      intervalId= setInterval(()=>{
      SetTime(Time-1);
      },5*1000);
    }
    if(Time<=0)
    {
      let sum =0;
        clearInterval(intervalId);
        answers.forEach((item)=>{
          if(!isNaN(item))
          sum = sum+item;
        })
        setSubmit(true);
        setScore(sum);
        //submit();
    }else{
    setQLevel(props.questions[QNo].questionLevel);
    setDescription(props.questions[QNo].questionDescription);
    setOptionA(props.questions[QNo].questionOptionA);
    setOptionB(props.questions[QNo].questionOptionB);
    setOptionC(props.questions[QNo].questionOptionC);
    setOptionD(props.questions[QNo].questionOptionD);
    }
  });
  if(submitted)
  { 
    return(
    <Score score={score}/>
    );
  }
  else{
    return(
      <>
     
        <div className="Section">
          <div className="Question">
            <ul className="task">
                <li className="taskId">Question No. : {QNo+1}</li>
                <li className="taskId">Level:{QLevel}</li>
                <li style={{color:'red'}} className="taskId"><span style={{color:'aqua'}}>Time Left: </span> {Time} Minutes </li>
            </ul>
            <div className="Description">
               <h4>{Description}</h4>
            </div>
            <div className="Options">
              <div className="two">
                <h5 className="Option" style={{background: colorId ==="A" ? "red" : ""}} id="A" onClick={(event)=>checkScore(event)}>{OptionA}</h5>
                <h5 className="Option" style={{background: colorId ==="B" ? "red" : ""}} id="B" onClick={(event)=>checkScore(event)} >{OptionB}</h5>
              </div>
              <div className="two">
               <h5 className="Option" style={{background: colorId ==="C" ? "red" : ""}} id="C" onClick={(event)=>checkScore(event)} >{OptionC}</h5>
               <h5 className="Option" style={{background: colorId ==="D" ? "red" : ""}} id="D" onClick={(event)=>checkScore(event)} >{OptionD}</h5>
              </div>
            </div>

            <div className="buttons">
              <button className="prev" disabled={QNo!==0?false:true} onClick={prev}>Previous</button>
              <button disabled={QNo!==totalNumber?false:true} className="next" onClick={next}>Next</button>
              <button className="next" onClick={submit}>Submit</button>
            </div>
            <div>{error}</div>
          </div>
        </div>
        </>
    )
}
}
export default QuizPage;