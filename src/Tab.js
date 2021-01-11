import React  from 'react';

function Tab (props){
    return(
         <tr>
             <td>{props.index}</td>
             <td>{props.data.type}</td>
             <td>{props.data.number}</td>
             <td>{props.data.timeTotal}</td>
             <td>{props.data.level}</td>
             <td>{"  "+props.data.startTime.split("T")+" "}</td>
             {
             (props.data.score===-1)?
              <td><button onClick={()=>{props.startTest(props.data.type,props.data.number,props.data.level,props.data._id,props.data.score,props.data.timeTotal)}} className="button">Start</button><button  onClick={()=>{props.deleteTimer(props.data._id)}}className="button">Delete</button></td>
             :
              <td><button className="button" onClick={()=>{props.showScore(props.data.score)}}>Score</button><button  onClick={()=>{props.deleteTimer(props.data._id)}}className="button">Delete</button></td>
             }
        </tr>
    )
}
export default Tab;