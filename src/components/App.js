
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [list, setList]=useState([]);
  const [text,setText]=useState({});

  const addToDo = ()=>{
       setList([text,...list]);
       //setText(""); 
  }
  const change=(e)=>{
    const userInput = { 
      // Add a random id which is used to delete 
      id: Math.random(), 

      // Add a user value to list 
      value: e.target.value, 
  }
    setText(userInput);
   // console.log(e)
  }
  const deleteToDo =(key)=>{
   // console.log(e.currentTarget+ "123Check");
    const updateList = list.filter((item) => item.id !== key);
    //const updateList = list.filter((item) => item.id !== ); 
    setList(updateList);
  }
  console.log(list +" "+ text)
  return (
    <div>
        <h1>To-Do List</h1>
        <input type="text" id="todo" onChange={change}></input>
        <button onClick={addToDo}>Add ToDo</button>

        <ul>
             {
              (list!=="") && 
              list.map((ele)=>(
                <>
                <div className="lis">
                <li>{ele.value}</li> 
                <button className="remove-btn" onClick={()=>deleteToDo(ele.id)}>Delete</button>
                </div> 
                </>
              ))  
             }   
        </ul>

    </div>
  )
}

export default App
