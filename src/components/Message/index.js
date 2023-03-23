import React from 'react';
import './index.css';

function Message(props) {
  return (
    <div className='box'>
    <h1 className='header'>Oh snap! You got an ERROR!</h1>
    <p className='text'>You need to be on a computer with a screen width of 1300 pixels or greater to enjoy all our features. </p>
    </div>
  );
}

export default Message;