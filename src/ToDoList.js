import React from "react"

const ToDoList =(props)=>{

    return (
        <>
        <div>
            <button onClick={()=>{
                props.onSelect(props.id)
            }}>X</button>
            <li> {props.text} </li>
        </div>
        </>
    )
}
export default ToDoList