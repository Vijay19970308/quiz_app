import React  from 'react';
import "./Profile.css";
function Profile()
{
 return (
     <div id="main">
         <div id="content">
         <div id="profile" >
              <img id="image" src={"https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"} alt="image"></img>
              <button id="button">Update</button>
              </div>
         </div>
         <div id="content">
         <div id="Achievement" >
              <h4>Achievement</h4>
              <p>Highest Scorer in the Saturday Quiz</p>
         </div>
         <div id="LastQuiz" >
                <h4>Last Quiz</h4>
         </div>
         <div id="TopScore" >
                <h4>Top Score</h4>
                <h5>Score:</h5><p>0</p>
         </div>
         </div>
         <div id="content">
         <div id="Level" >
                <h4>Level</h4>
                <h5>Biginner</h5>
         </div>
          </div>
     </div>
 )
}

export default Profile;