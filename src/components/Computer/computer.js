import React from 'react';

import myImage from './computer.png';

function Computer() {
  const imgStyle = {
    position: 'absolute',
    top: '130px',
    left: '50px',
  };

  return (
    <div className="App">
      <img src={myImage} alt="My Image" style={imgStyle} />
    </div>
  );
}

export default Computer;
