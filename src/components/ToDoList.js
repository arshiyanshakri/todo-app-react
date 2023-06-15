import React from "react"
import ToDo from "./ToDo"

const ToDoList = ({props, handleToggle, handleFilter}) =>{
    return(
        <div>
          {props.map((todo) => {
            return (
                <ToDo props={todo}  handleToggle={handleToggle} handleFilter={handleFilter}/>
            )
           })   
        }
        <button onClick={handleFilter}>Clear Completed</button>
        </div>
    )
}

export default ToDoList