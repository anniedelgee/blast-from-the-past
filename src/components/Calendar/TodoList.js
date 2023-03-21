import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './calendar.css';


function TodoList() {

    const [todos,setTodos] = useState([])

    //when you add a todo this makes sure that if no letters are typed it won't update the list

    //add todo to list
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        // console.log(...todos);
    }; 

    //edit todo
    const updateTodo = (todoId, newValue ) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev => prev.map (item => (item.id === todoId ? newValue: item)));
    
    };

    //remove todo
    const removeTodo = id => {
        const removeArr = [...todos].filter (todo => todo.id !== id);

        setTodos(removeArr);
    };

    //completed todo\
    const completeTodo = id => {
        let updatedTodos = todos.map (todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;

        });
        setTodos(updatedTodos);
    };

    //date function
    const currentDate = new Date().toLocaleDateString();

  return (
    <Card style={{width: '26rem'}}>
    <Card.Header>Today's Date: {currentDate}</Card.Header>
    <Card.Title>
        <center>Top 3 non-negotiables for today:</center>
    </Card.Title>
        <TodoForm onSubmit={addTodo}/>
        <Todo 
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}/>
    <Card.Body>
        <blockquote className='blockquote mb-0'>
        <Card.Title>
        Quote of the Day:
    </Card.Title> 
    <p>
    {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
    </p>
    <footer className='blockquote-footer'>
        Someone famous in <cite title='Source Title'>Source Title</cite>
    </footer>
    </blockquote>
    </Card.Body>
    </Card>
  );
};

export default TodoList