
import React, { useState } from 'react';
import Canvas from "./components/Canvas";
import CatchGame from "./components/CatchGame";
import BallClick from "./components/BallClick";
import DialOne from "./components/DialOne";
import DialTwo from "./components/DialTwo";
import DialThree from "./components/DialThree";
import Computer from "./components/Computer/computer";
import TodoList from "./components/Calendar/TodoList";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




let ScreenSaverShown = true;
let SecondGameShown = false;
let ThirdGameShown = false;



function App() {
  const [showScreenSaver, setShowScreen] = useState(true);
  const [showSecondGame, setSecondGame] = useState(true);
  const [showThirdGame, setThirdGame,] = useState(true);



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
        return;
      }
      if(ThirdGameShown == true)
      {
        setShowScreen(!showScreenSaver);
        setThirdGame(!showThirdGame);
        ScreenSaverShown = true;
        ThirdGameShown = false;
        return;
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
        return;
      }
      if(ThirdGameShown == true)
      {
        setSecondGame(!showSecondGame);
        setThirdGame(!showThirdGame);
        SecondGameShown = true;
        ThirdGameShown = false;
        return;
      }
    }
  }

  const button3Click = () => {
    if(ThirdGameShown == true)
    {
      return;
    }
    else
    {
      if(ScreenSaverShown == true)
      {
        setShowScreen(!showScreenSaver);
        setThirdGame(!showThirdGame);
        ThirdGameShown = true;
        ScreenSaverShown = false;
        return
      }
      if(SecondGameShown == true)
      {
        setThirdGame(!showThirdGame);
        setSecondGame(!showSecondGame);
        ThirdGameShown = true;
        SecondGameShown = false;
        return
      }
    }
  }

    return (
    <div>
  
     {showScreenSaver && <Canvas className="hidden"/>}
      {!showSecondGame && <BallClick className="hidden"/>}
      {!showThirdGame && <CatchGame className="hidden"/>}
      <Computer className="hidden"></Computer>

   
      <DialOne handleClick={button1Click} />

      <DialTwo handleClick={button2Click} />

      <DialThree handleClick={button3Click} />

      <TodoList className="todo-list"></TodoList>
    </div>
  );
}

export default App;
