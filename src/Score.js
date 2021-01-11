import React from 'react';
import  "./Score.css";
function Score(props)
{
    return(<div id="Page">
              <h1 id="Score">Score:<span id="Num">{props.score}</span></h1>
           </div>
    );
}
export default Score;