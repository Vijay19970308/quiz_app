import React, { useEffect, useState }  from 'react';
import "./Report.css";
import Tab from "./Tab";
import QuizPage from "./QuizPage";
function Reports(props)
{
   const [tabs,setTabs]= useState([]);
   const [questions,setQuestions]= useState([]);
   const startTest = (type,number,level)=>{
      try{
            fetch("http://localhost:9000/fetchQuestion",{
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
               if(r.ok)
               { 
                  return r.json();
               }
            }).then((r)=>{
               setQuestions(r.result);  
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
 },[]);
 const answer = ()=>{
      fetch("http://localhost:9000/AllTimers",{
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
if(questions.length!==0)
{
   return (<QuizPage questions={questions}/>);
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
                       <Tab  key={idx} index={idx+1} data={item} startTest={startTest}/>
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