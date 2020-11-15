import React from "react"

function Item(props){
  console.log(props);
    return(
      <div>
        <input type="checkbox" onChange={()=>props.handlechange(props.id)} checked={props.status}/>
        <h2>{props.conten}</h2>
      </div>
    )
  } 

export default Item