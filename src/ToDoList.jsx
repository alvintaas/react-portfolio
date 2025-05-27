import React, { useState } from "react";


function ToDoList({ todos, onDelete }) {
  
    const [tasks, setTasks] = useState(['Take Shower', 'Walk the dog', 'Go to the gym']);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        
        if(newTask.trim() !== '') {
        
        setTasks(t => [...t, newTask]);
        setNewTask(''); // Clear input after adding
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {

        if (index > 0) {
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index - 1];
            updatedTasks[index - 1] = updatedTasks[index];
            updatedTasks[index] = temp;
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index + 1];
            updatedTasks[index + 1] = updatedTasks[index];
            updatedTasks[index] = temp;
            setTasks(updatedTasks);
        }
    }

    return(
    <div className="to-do-list">
        <div className='card-heading'>
            <h2>To Do List</h2>
        </div>

        <div className="to-do-list-input-container">
            <input
            type='text'
            placeholder='Enter a task..'
            value ={newTask}
            onChange={handleInputChange}
            /> 
            <button className='add-button'
            onClick={addTask}>
            Add Task</button>

        </div>

        <ol>
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className='todo-text'>{task}</span>
                    <span className='todo-actions'>
                        <button className='delete-button' onClick={() => deleteTask(index)}>🗑️</button>
                        <button className='move-button' onClick={() => moveTaskUp(index)}>🔼</button>
                        <button className='move-button' onClick={() => moveTaskDown(index)}>🔽</button> 
                    </span>
                </li>
            )}
        </ol>

    </div>
    )
}

export default ToDoList;