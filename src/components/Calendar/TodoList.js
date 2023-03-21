import React from 'react'
import TodoForm from './TodoForm'


function TodoList() {

    const [todos,setTodos] = useState([])

    //when you add a todo this makes sure that if no letters are typed it won't update the list

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        // console.log(...todos);
    }; 

    
  return (
    <div>
        <h1>What are your non-negotiables?</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo 
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}/>
    </div>
  );
};

export default TodoList