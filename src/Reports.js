import React, { useEffect, useState }  from 'react';
import "./Report.css";
import Tab from "./Tab";
import QuizPage from "./QuizPage";
import Score from "./Score";
function Reports(props)
{
   const [tabs,setTabs]= useState([]);
   const [questions,setQuestions]= useState([]);
   const [Startin,setStartIn]=useState(false);
   const [totalTime,setTotalTime]=useState(0);
   const [QId,setQId]=useState("");
   const [QScore,setScore]=useState(0);

   const showScore = async (score)=>{
      setScore(score);
      setStartIn(true); 
   };
   const deleteTimer = async (Rid)=>{
     try{
      await fetch("http://localhost:9000/DeleteTimer",{
            method:"DELETE",
            headers:{
               'Content-Type': 'application/json',
               'Access-Control-Allow-Origin':'*',
            },
            body:JSON.stringify({
            id:Rid,
            })
            }).then((r)=>{
               if(r.ok){
                   return r.json();
                }
            }).then((r)=>{ 
               setStartIn(false); 
            });
         }catch(e)
         {
         console.log(e.message);
         }
         Rid="";
   }
   const startTest = async (type,number,level,id,score,time)=>{
      try{
            setQId(id);
            setTotalTime(time);
            setScore(score);
            await fetch("http://localhost:9000/fetchQuestion",{
            method:"POST",
            headers:{
               'Content-Type': 'application/json',
               'Access-Control-Allow-Origin':'*',
            },
            body:JSON.stringify({
            type:type,
            number:number,
            level:level,
            })
            }).then((r)=>{
               if(r.ok){
                   return r.json();
                }
            }).then((r)=>{
               setQuestions(r.result); 
               setStartIn(true); 
            });
         }catch(e)
         {
         console.log(e.message);
         }
   }

   useEffect(()=>{
      try{
         
         answer();   
 
       }catch(e){
         console.log(e.message);
      }
 });
 const answer = async ()=>{
      await fetch("http://localhost:9000/AllTimers",{
      method:"POST",
      headers:{
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin':'*',
      },
      body:JSON.stringify({
         username:props.username
      })
      }).then((r)=>{
      if(r.ok)
      {
         return r.json();
      }
      }).then((r)=>{
      setTabs(r.result);  
      });}
if(Startin)
{
   if(QScore===-1)
    return (<QuizPage id={QId} questions={questions} score={QScore} time={totalTime}/>);
   else
    return <Score score={QScore}/>;
}
else{
 return (
        <div id="report">
           <div id="table">
              <table id="tabletag">
                 <thead>
                     <tr>
                         <th>Serial No.</th>
                         <th>Type of Quiz</th>
                         <th>Total Question</th>
                         <th>Time Limit</th>
                         <th>Level</th>
                         <th>Starting Time</th>
                         <th>Action</th>
                     </tr>
                 </thead>
                 <tbody>
                  {        
                     tabs.map((item,idx)=>(
                       <Tab  key={idx} index={idx+1} data={item} deleteTimer={deleteTimer} showScore={showScore} startTest={startTest}/>
                     ))
                  }
                 </tbody>
              </table>
           </div>
        </div>
           )
}
}
export default Reports;