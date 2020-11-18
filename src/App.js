import React, { useState } from "react";
import ToDoList from "./ToDoList";
import "./style.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });

    setInputList("");
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="center_div">
        <div className="items">
          <div className="appname">
            <h1> Todo List</h1>
          </div>
          <div className="input">
            <input value={inputList} onChange={itemEvent} label="Add Todos" />
            <IconButton onClick={listOfItems}>
              <AddCircleIcon fontSize="large" />
            </IconButton>
          </div>
          <div className="main-content">
            <ol>
              {Items.map((itemval, index) => {
                return (
                  <ToDoList
                    key={index}
                    id={index}
                    text={itemval}
                    onSelect={deleteItems}
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
