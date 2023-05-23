import React from "react";
import Count from "./count/count";
import Hideandshow from "./hideshow/hideandshow";
import Productlist from "./product/productlist";
import Todo from "./todolist/todo";
import Todo1 from "./todolist/todo1";


function App() {
  return (
    <div className="App">
   <Todo/>
   <Todo1/>
   <Hideandshow/>
   <Count/>
   <Productlist/>
    </div>
  );
}

export default App;
