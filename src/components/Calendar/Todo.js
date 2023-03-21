import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import {} icon from 
import {} icon from 

function Todo() {
  return (
    <div className={Todo.isComplete ? 'todo-row complete' : 'todo-row'}
    key={index}>
        <div key={todo.id} onClick = {()=> completeTodo(todo.id)}>{todo.text}
        </div>
        <div className='icons'>
            
        </div>
        
        </div>
  );
};

export default Todo