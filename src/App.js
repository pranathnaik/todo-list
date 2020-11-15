import React from "react"
import Item from "./item"
import todosData from "./data"
class App extends React.Component{
  constructor(){
    super()
    this.state = { 
      todos : todosData
      
    }
    this.handlechange = this.handlechange.bind();
  }
  handlechange(id){
    console.log(id)
  }

  render(){
   const todositem= this.state.todos.map(item => <Item 
                                                  key={item.id} 
                                                  id={item.id} 
                                                  conten={item.text} 
                                                  status={item.completed}
                                                  handlechange={this.handlechange}/>)
     return(
       <div>
       {todositem}    
       </div>
       )
   }
} 
export default App  