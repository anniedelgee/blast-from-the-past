
import React, { useState } from 'react';
import Canvas from "./components/Canvas";
import CatchGame from "./components/CatchGame";
import Dial from "./components/Dial/dial";
import Computer from "./components/Computer/computer";
import './App.css';

let ScreenSaverShown = true;
let SecondGameShown = false;
let ThirdGameShown = false;


function App() {
  const [showScreenSaver, setShowWrapper] = useState(true);
  const [showWrapper2, setShowWrapper2] = useState(true);
  const [showWrapper3, setShowWrapper3] = useState(true);

 

  const handleWrapperClick = () => {
    if(ScreenSaverShown == true)
    {
      setShowWrapper(!showScreenSaver);
      setShowWrapper2(!showWrapper2);
      ScreenSaverShown = false;
      SecondGameShown = true;
      console.log("1");
      return;
      
    }
    if(SecondGameShown == true)
    {
      setShowWrapper2(!showWrapper2);
      setShowWrapper3(!showWrapper3);
      SecondGameShown = false;
      ThirdGameShown = true;
      console.log("2");
      return;
    }
    if(ThirdGameShown == true)
    {
      setShowWrapper3(!showWrapper3);
      setShowWrapper(!showScreenSaver);
      ThirdGameShown = false;
      ScreenSaverShown = true;
      console.log("3");
      return;
    }
    

  };



  return (
    <div>
  
      {showScreenSaver && <Canvas/>}
      {!showWrapper2 && <CatchGame />}
      {!showWrapper3 && <CatchGame />}
      <Computer></Computer>
      <Dial handleClick={handleWrapperClick} />
    </div>
  );
}


export default App;
