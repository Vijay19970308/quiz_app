import React, { useEffect, useState }  from 'react';
import "./NewQuiz.css";
function NewQuiz(props){
    const [type,setType]=useState("");
    const [number,setNumbers]=useState("");
    const [totalTime,setTotalTime]=useState("");
    const [start,setStart]=useState("");
    const [level,setLevel]=useState("");
    const [startDate,setStartDate]=useState("");
    const [endDate,setEndDate]=useState("");
    const [Error,setError]=useState("");
    const checkZero=(val)=>{
        const len = val.length;
        if(len===1){
            val="0"+val;
        }
        return val;

    }
    const saveTimer =async()=>{
        try{
          setError("");
          await fetch("http://localhost:9000/AddTimer",{
             method:"POST",
             headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*',
             },
             body:JSON.stringify({
                username:props.username,
                type:type,
                number:number,
                timeTotal: totalTime,
                level: level,
                startTime:start
             })
          }).then((r)=>{
             if(r.ok){
               return{ success:true};
             }
             else{
                return r.json();
             }
          })
          .then((r)=>{
             if(r.success===true){
                setError("Scheduled Successfully!!!");
             }
             else{
                setError(r.message);
             }
       
          });
       }catch(e)
       {
         setError(e.message);
       }
    }
    useEffect(()=>{
        const currentDate = new Date(); 
        const year = currentDate.getFullYear();
        const month = checkZero(""+currentDate.getMonth()+1);
        const day = checkZero(""+currentDate.getDate());
        const hour = checkZero(""+currentDate.getHours());
        const min = checkZero(""+currentDate.getMinutes());
        const string = year+"-"+month+"-"+day+"T"+hour+":"+min;  
        setStartDate(string);
        const string1 = year+1+"-"+month+"-"+day+"T"+hour+":"+min;  
        setEndDate(string1);
    },[]);
    return(
        <div className="Start">
            <div className="form">
               <div className="Query">
                    <label className="label">Type of Quiz:</label>
                    <select name="Type" onChange={(event)=>{setType(event.target.value)}} className="select">
                            <option className="Option" value="">----Select----</option>
                            <option className="Option" value="Java">Java</option>
                            <option className="Option" value="Html">HTML</option>
                            <option className="Option" value="Css">CSS</option>
                            <option className="Option" value="Javascript">Javascript</option>
                            <option className="Option" value="React">React</option>
                            <option className="Option" value="NodeJs">NodeJs</option>
                            <option className="Option" value="JSON">JSON</option>
                    </select>
                </div>
               <div className="Query">
                    <label className="label">Number of Questions:</label>
                    <select name="Numbers" className="select" onChange={(event)=>{setNumbers(event.target.value)}} >
                            <option className="Option" value="">----Select----</option>
                            <option className="Option" value="10">10</option>
                            <option className="Option" value="15">15</option>
                            <option className="Option" value="20">20</option>
                            <option className="Option" value="25">25</option>
                            <option className="Option" value="30">30</option>
                            <option className="Option" value="50">50</option>
                    </select>
                </div>
                <div className="Query">
                    <label className="label">Total Time:</label>
                    <select name="Time" className="select" onChange={(event)=>{setTotalTime(event.target.value)}} >
                            <option className="Option" value="">----Select----</option>
                            <option className="Option" value="10">10 min</option>
                            <option className="Option" value="12">12 min</option>
                            <option className="Option" value="15">15 min</option>
                            <option className="Option" value="20">20 min</option>
                    </select>
                </div>
                <div className="Query">
                    <label className="label">Level of Quiz:</label>
                    <select name="Level" className="select" onChange={(event)=>{setLevel(event.target.value)}} >
                            <option className="Option" value="">----Select----</option>
                            <option className="Option" value="1">Beginner</option>
                            <option className="Option" value="2">Medium</option>
                            <option className="Option" value="3">Hard</option>
                    </select>
                </div>
                <div className="Query">
                    <label className="label">Starting Time:</label>
                     <input type="datetime-local"  className="select" onChange={(event)=>{setStart(event.target.value)}} id="select" min = {startDate} max={endDate} ></input>
                </div>
            </div>
            <div className="center">
                <button type="button" onClick={saveTimer} className="button" >Schedule Quiz</button>
                <h4 className="label">After Scheduling quiz please check in report section!!!</h4>
                <h4 className="label">{Error}</h4>
            </div>
        </div>
    )

}

export default NewQuiz;