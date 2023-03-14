
import React, { useState } from 'react';
import Wrapper from "./components/Wrapper";
import Wrapper2 from "./components/Wrapper2";
import './App.css';

function App() {
  const [showWrapper, setShowWrapper] = useState(true);
  const [showWrapper2, setShowWrapper2] = useState(true);

  const handleWrapperClick = () => {
    setShowWrapper(!showWrapper);
    setShowWrapper2(!showWrapper2);
  };



  return (
    <div>
      <button onClick={handleWrapperClick}>
      Button
      </button>
      {!showWrapper && <Wrapper />}
      {!showWrapper2 && <Wrapper2 />}
    </div>
  );
}


export default App;
