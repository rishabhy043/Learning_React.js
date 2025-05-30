import './Todo.css';
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import React, { useState } from 'react';

export const Todo = () => {
    // eslint-disable-next-line no-undef
    const [inputValue, setInputValue] = useState("");
    //user input field m jo task likhega continuesly usse save krne k liye
    // eslint-disable-next-line no-unused-vars

    // const [task, setTask] = useState([]);              ---> now getting data from localstorage

    const todokey = "react-todo";
    const [task, setTask] = useState(() => {
            const rawTodos = localStorage.getItem(todokey);
            if (!rawTodos) return [];
            return JSON.parse(rawTodos);
    });
    // for date and time
    const [datetime, setdatetime] = useState("");

    //To hahndle the input text of any input field
    // Or What user types uska Data 
    const handleInputChange = (value) => {
        setInputValue(value);
    }
    // When we submit the form automatically re-rendered to stop this
    const handleFormSublit = (event) => {
        event.preventDefault();

        //if inputValue is empty then return nothing; no action performed on empty
        if (!inputValue) return;

        // if same value exists in inputvalue do nothing
        if (task.includes(inputValue)) {
            setInputValue("");
            return;
        }
        //use to save previos task (...) SPREAD OPERATOR , ARRAY m previos task then recent value STORED
        setTask((prevTask) => [...prevTask, inputValue])

        setInputValue("")
    }

    // TODO DATE AND TIME 
    //TIME NOT UPDATED EVERY SECOND AUTOMATICALY NEED REFRESH SO SETINTERVAL USED
    setInterval(() => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();
        setdatetime(`${formattedDate} - ${formattedTime}`)
    }, 1000);

    const handleDeleteTodo = (value) => {
        console.log(task);
        console.log(value);
        //clicked element NOT DELETED AND ALL ARE DELETED
        // const updateTask = task.filter((curTask) => curTask === value);

        // CLICKED ELEMENT ARE DELETED
        const updateTask = task.filter((curTask) => curTask !== value);
        setTask(updateTask)
    }

    const handleclearbtn = () => {
        setTask([]);
    }

    // Todo add data to Local Storage
    localStorage.setItem(todokey, JSON.stringify(task));

    return (
        <section className="todo-container">
            <header>
                <h1>TODO-LIST</h1>
                <h2 className='date-time'>{datetime}</h2>
            </header>
            <section className='form'>
                <form onSubmit={handleFormSublit}>
                    <div>
                        <input type="text"
                            autoComplete='off'
                            className='todo-input'
                            value={inputValue}
                            onChange={(event) => handleInputChange(event.target.value)}
                        />
                    </div>
                    <div>
                        <button type='submit' className='todo-list'></button>
                    </div>
                </form>
            </section>
            <section className='myUnOrdList'>
                <ul>
                    {task.map((curTask, index) => {
                        return (
                            <li key={index} className='todo-item'>
                                <span>{curTask}</span>
                                <button className='check-btn'><FaCheckCircle /></button>
                                <button className='delete-btn' onClick={() => handleDeleteTodo(curTask)}><MdDeleteForever /></button>
                            </li>
                        )
                    })
                    }
                </ul>
            </section>
            <section>
                <button className='clear-btn' onClick={handleclearbtn}>CLEAR ALL</button>
            </section>
        </section>
    )
}