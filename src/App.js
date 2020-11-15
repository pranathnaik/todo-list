import React,{useState} from "react"
import ToDoList from "./ToDoList"

const App =() =>{

  const [inputList, setInputList] = useState("");
  const [Items,setItems] = useState([]);

  const itemEvent =(event)=> {
    setInputList(event.target.value);
  };

  const listOfItems =()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });

    setInputList('')
  }

  return (<>
    <div className='main_div'>
      <div className='center_div'>
        <br/>
        <h1> Todo List</h1>
        <br/>
        <input value={inputList} type="text" placeholder='Add items' onChange={itemEvent}/>
        <button onClick={listOfItems} >+</button>


        <ol>
          {Items.map((itemval)=>{
          return   <ToDoList 
              text ={itemval}
            />
          })}
        </ol>
        </div>
    </div>
  </>)
}

export default App;