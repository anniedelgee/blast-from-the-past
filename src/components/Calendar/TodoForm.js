import React, { useState, useEffect, useRef } from "react";




function TodoForm(props) {

    const [input, setInput] = useState (props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(()=> {
        inputRef.current.focus ()
    }); 
    
    //functionality for the button

    const handleChange = e  => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault ();
        
        props.onSubmit({
            id: Math.floor(Math.random ()* 1000),
            text:input
        });

    //clears the text
        setInput("")
};

  return (
    <div>
        <form className="todo-form" onSubmit={handleSubmit}> 
        {props.edit ? (
            <>
            <input 
            type='text'
            placeholder="Edit your item"
            value={input}
            name='text'
            className="todo-input edit"
             onChange={handleChange}
            ref={inputRef}
            />
            <button className="todo-button edit">Update</button>
            </>
        ):
        (
            <>
            <input 
            type='text'
            placeholder="Must be done"
            value={input}
            name='text'
            className="todo-input"
             onChange={handleChange}
            ref={inputRef}
            />
            <button className="todo-button">Add</button>
            </> 
        )}
        </form>
    </div>
  );
};

export default TodoForm