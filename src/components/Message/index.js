import React from 'react';
import './index.css';

function Message(props) {
  return (
    <div className='box'>
    <h1 className='header'>Oh snap! You got an error!</h1>
    <p className='text'>You need to be on a computer with a screen width of 1300 pixels or greater to play. </p>
    </div>
  );
}

export default Message;