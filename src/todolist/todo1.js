import React, { useState } from 'react'

export default function Todo1() {
    const [list,setList]=useState([]);
    const [input, setInput] = useState("");

    const addTodo=(todo)=>{
        const newTodo={
            id:Math.random(),
            todo:todo,
        };
        //add input list todo
        setList([...list,newTodo]);
        //clear input
        setInput("");
    }

    const deleteTodo=(id)=>{
        const newlist=list.filter((val)=>val.id !== id);
        setList(newlist);
    }
  return (
    <div>
        <h1>Todo List</h1>
        <input
         type="text"
         value={input}
         onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={()=>addTodo(input)}>Add</button>

        <ul>
            {list.map((todo)=>(
                <li key={todo.id}>
                    {todo.todo}
                <button onClick={()=>deleteTodo(todo.id)}>X</button>    
                </li>
            ))}
        </ul>
    </div>
  )
}
