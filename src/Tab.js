import React  from 'react';

function Tab (props){
    return(
         <tr>
             <td>{props.index}</td>
             <td>{props.data.type}</td>
             <td>{props.data.number}</td>
             <td>{props.data.timeTotal}</td>
             <td>{props.data.level}</td>
             <td>{props.data.startTime.split("T")+" "}</td>
             <td><button onClick={props.startTest(props.data.type,props.data.number,props.data.level)} className="button">Start</button><button className="button">Delete</button></td>
         </tr>
    )
}
export default Tab;