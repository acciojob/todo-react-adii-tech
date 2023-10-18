
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [list, setList]=useState([]);
  const [text,setText]=useState("");

  const addToDo = ()=>{
       setList([text,...list]);
       setText(""); 
  }
  const change=(e)=>{
    setText(e.target.value);
   // console.log(e)
  }
  const deleteToDo =(e)=>{
   // console.log(e.currentTarget+ "123Check");
    console.log(e.target)
    //const updateList = list.filter((item) => item.id !== ); 
     //  setList([])
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
                <li>{ele}</li> 
                <button className="remove-btn" onClick={(event)=>deleteToDo(event)}>Delete</button>
                </div> 
                </>
              ))  
             }   
        </ul>

    </div>
  )
}

export default App
