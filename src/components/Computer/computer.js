import React from 'react';

import myImage from './computer.png';

function Computer() {
  const imgStyle = {
    // position: 'absolute',
    // top: '350px',
    // left: '740px',
    width: '100%',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div className="App">
      <img src={myImage} alt="My Image" style={imgStyle} />
    </div>
  );
}

export default Computer;

