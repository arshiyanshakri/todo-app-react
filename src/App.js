import data from './components/data.json';
import './App.css';
import { useState } from 'react';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  const[todolist, setTodolist]= useState(data)

  function handleToggle(id) {
    let mapped=todolist.map((task) => {
      return (task.id == id ? {...task, complete: !task.complete}: {...task})
    })
    setTodolist(mapped)
  }

  const handleFilter = () =>{
    let filtered = todolist.filter((task) => {
      return (!task.complete)
    })
    setTodolist(filtered)
  }

  const addTask = (userInput) => {
    let copy = [...todolist];
    copy = [...copy, { id: todolist.length + 1, task: userInput, complete: false }];
    setTodolist(copy);
  }

  return (
   <div style={{textAlign:'center'}}>
    <header><h1>To Do List</h1></header>

    <ToDoList props={todolist}  handleToggle={handleToggle}  handleFilter={handleFilter}/>
    <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
