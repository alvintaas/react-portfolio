import React, { useState } from "react";


function ToDoList({ todos, onDelete }) {
  
    const [tasks, setTasks] = useState(['Take Shower', 'Walk the dog', 'Go to the gym']);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {

    }

    function deleteTask(index) {

    }

    function moveTaskUp(index) {
    }

    function moveTaskDown(index) {

    }

    return(
    <div className="to-do-list">
        <h1>To Do List</h1>

        <div>
            <input
            type='text'
            placeholder='Enter a task..'
            value ={newTask}
            onChange={handleInputChange}
            /> 
            <br></br>
            <button className='add-button'
            onClick={addTask}>
            Add Task</button>

        </div>

        <ol>
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className='text'>{task}</span>
                    
                    <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                    <button className='move-up-button' onClick={() => moveTaskUp(index)}>Move Up</button>
                    <button className='move-down-button' onClick={() => moveTaskDown(index)}>Move Down</button>
                </li>
            )}
        </ol>

    </div>
    )
}

export default ToDoList;