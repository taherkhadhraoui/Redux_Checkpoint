import React from "react";
import "./App.css";
import AddTodo from "./Components/AddToDo/AddTodo";
import ListTodo from "./Components/ListTodo/ListTodo";

function App() {
  return (
    <div className="App">
      <h1>Todo Application Redux</h1>

      <AddTodo />
      <ListTodo />
      {/* <Test /> */}
    </div>
  );
}

export default App;
