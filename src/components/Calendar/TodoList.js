import React, {useEffect, useState} from 'react'
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

    //declaring quote state variable in useState hook:
    const [quote, setQuote] = useState("");

    //for author

    const [author, setAuthor] = useState('');

    //Getting the QoD

    useEffect(() => {
        fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            setQuote(data.content);
            setAuthor(data.author);

        });
    }, []);

  return (
    //card component
    <Card style={{width: '26rem', float: "right", margin:'1rem'}}>
    <Card.Header>Today's Date: {currentDate}</Card.Header>
    <Card.Title>
        <center>Top 3 non-negotiables for today:</center>
    </Card.Title>
    <Card.Body className='text-center'>
        <TodoForm onSubmit={addTodo}/>
        <Todo 
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}/>
        </Card.Body>
    <Card.Body>
        <blockquote className='blockquote mb-0'>
        <Card.Title>
        Quote of the Day:
    </Card.Title> 
    <p style = {{fontSize: '1rem'}}>
            {quote}
    </p>
    <footer className='blockquote-footer'>
        {author} <cite title='Source Title'></cite>
    </footer>
    </blockquote>
    </Card.Body>
    </Card>
  );
};

export default TodoList