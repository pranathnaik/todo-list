import React,{useState} from "react"
import ToDoList from "./ToDoList"
import "./style.css"
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

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

  const deleteItems =(id)=>{

    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !== id;
      })
    })
}

  return (<>
    <div className='main_div'>
      <div className='center_div'>
      
        <br/>
        <div className="items">
        <h1> Todo List</h1>
        <br/>
          <div className="input">
            <TextField value={inputList}  onChange={itemEvent} color="secondary" label="Add Todos" variant="outlined" />
            <IconButton onClick={listOfItems} >
            <AddCircleIcon fontSize="large" />
            </IconButton>
          </div>

        <ol>
          {Items.map((itemval,index)=>{
          return   <ToDoList 
                      key={index}
                      id={index}
                      text ={itemval}
                      onSelect ={deleteItems}
                  />
          })}
        </ol>
        </div>
        </div>
    </div>
  </>)
}

export default App;