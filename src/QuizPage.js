import React, { useState,useEffect } from 'react';
import "./QuizPage.css";
function QuizPage(props){
  const [QNo, setQNo]=useState(0);
  const [QLevel,setQLevel]=useState(props.questions[0].questionLevel);
  const [Time,SetTime]=useState("");
  const [Description,setDescription]=useState("");
  const [OptionA,setOptionA]=useState("");
  const [OptionB,setOptionB]=useState("");
  const [OptionC,setOptionC]=useState("");
  const [OptionD,setOptionD]=useState("");
  const totalNumber=props.questions.length-1;
  const next=(()=> {
    console.log(QNo);
    if(QNo<totalNumber)
    {
       setQNo(QNo+1);
    }
  });
  const prev=(()=> {
    if(QNo>0)
    {
      setQNo(QNo-1);
    }
    
  });
  useEffect(()=>{
    setDescription(props.questions[QNo].questionDescription);
    setOptionA(props.questions[QNo].questionOptionA);
    setOptionB(props.questions[QNo].questionOptionB);
    setOptionC(props.questions[QNo].questionOptionC);
    setOptionD(props.questions[QNo].questionOptionD);
  });
    return(
      <>
     
        <div id="Section">
          <div id="Question">
            <ul id="task">
                <li id="taskId">Question No. : {QNo+1}</li>
                <li id="taskId">Level:{QLevel}</li>
                <li id="taskId">Time Left:{Time}</li>
            </ul>
            <div id="Description">
               <h4>{Description}</h4>
            </div>
            <div id="Options">
              <div id="two">
                <h5 id="Option">{OptionA}</h5>
                <h5 id="Option">{OptionB}</h5>
              </div>
              <div id="two">
               <h5 id="Option">{OptionC}</h5>
               <h5 id="Option">{OptionD}</h5>
              </div>
            </div>

            <div id="buttons">
              <button id="prev" disabled={QNo!=0?false:true} onClick={prev}>Previous</button>
              <button disabled={QNo!=totalNumber?false:true} id="next" onClick={next}>Next</button>
            </div>
          </div>
        </div>
        </>
    )
}
export default QuizPage;