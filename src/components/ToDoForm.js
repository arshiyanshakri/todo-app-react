import React, { useState } from "react";

const ToDoForm = (props) => {
    const[input, setInput]= useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTask(input) 
        setInput('')
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={handleChange} placeholder="Enter task..."/>
            <button>Add</button>
        </form>
    )
}






export default ToDoForm