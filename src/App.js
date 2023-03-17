
import React, { useState } from 'react';
import Canvas from "./components/Canvas";
import CatchGame from "./components/CatchGame";
import DialOne from "./components/DialOne";
import DialTwo from "./components/DialTwo";
import Computer from "./components/Computer/computer";
import './App.css';

let ScreenSaverShown = true;
let SecondGameShown = false;
let ThirdGameShown = false;


function App() {
  const [showScreenSaver, setShowScreen] = useState(true);
  const [showSecondGame, setSecondGame] = useState(true);
  const [showWrapper3, setShowWrapper3] = useState(true);


  const button1Click = () => {
    if(ScreenSaverShown == true)
    {
      return;
    }
    else
    {
      if(SecondGameShown == true)
      {
        setShowScreen(!showScreenSaver);
        setSecondGame(!showSecondGame);
        ScreenSaverShown = true;
        SecondGameShown = false;
        return
      }
    }
  }
  const button2Click = () => {
    if(SecondGameShown == true)
    {
      return;
    }
    else
    {
      if(ScreenSaverShown == true)
      {
        setShowScreen(!showScreenSaver);
        setSecondGame(!showSecondGame);
        SecondGameShown = true;
        ScreenSaverShown = false;
        return
      }
    }
  }

 






  return (
    <div>
  
      {showScreenSaver && <Canvas/>}
      {!showSecondGame && <CatchGame />}
      {!showWrapper3 && <CatchGame />}
      <Computer></Computer>

      <DialOne handleClick={button1Click} />

      <DialTwo handleClick={button2Click} />
  
    </div>
  );
}


export default App;
