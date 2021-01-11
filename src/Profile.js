import React, { useEffect, useState }  from 'react';
import "./Profile.css";
import pic from './d.png';
function Profile(props)
{
       const [profile,setProfile]=useState("");
       const [achievement,setachievement]=useState("");
       const [lastQuiz,setlastQuiz]=useState("");
       const [topQuiz,setTopQuiz]=useState(0);
       const [level,setLevel]=useState("");
       const answer = async ()=>{
              await fetch("http://localhost:9000/getUserDetails",{
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
              setProfile(r.result.picture===""?pic:r.result.picture);  
              setachievement(r.result.achievement);
              setLevel(r.result.level);
              setTopQuiz(r.result.topQuiz);
              setlastQuiz(r.result.lastQuiz);
              });}
       useEffect(()=>{
              try{
                       answer();
              }catch(e){
                     console.log(e.message);
              }

       });
 return (
     <div id="main">
         <div id="content">
         <div id="profile">
                <img id="image" src={profile} alt="your pic"/>
              <button id="button">Update</button>
              </div>
         </div>
         <div id="content">
         <div id="Achievement" >
              <h4>Achievement</h4>
              <p>{achievement}</p>
         </div>
         <div id="LastQuiz" >
                <h4>Last Quiz:{lastQuiz}</h4>
         </div>
         <div id="TopScore" >
                <h4>Top Score</h4>
                <h5>Score:</h5><p>{topQuiz}</p>
         </div>
         </div>
         <div id="content">
         <div id="Level" >
                <h4>Level</h4>
                <h5>{level}</h5>
         </div>
          </div>
     </div>
 )
}

export default Profile;