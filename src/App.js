
import React, { useState } from 'react';
import Canvas from "./components/Canvas";
import Snake from "./components/Snake";
import CatchGame from "./components/CatchGame";
import BallClick from "./components/BallClick";
import Message from "./components/Message";
import DialOne from "./components/DialOne";
import DialTwo from "./components/DialTwo";
import DialThree from "./components/DialThree";
import DialFour from "./components/DialFour";
import Computer from "./components/Computer/computer";
import TodoList from "./components/Calendar/TodoList";
import SpotifyPlaylistCard from './components/Spotify';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




let ScreenSaverShown = true;
let SecondGameShown = false;
let ThirdGameShown = false;
let FourthGameShown = false;



function App() {
  const [showScreenSaver, setShowScreen] = useState(true);
  const [showSecondGame, setSecondGame] = useState(true);
  const [showThirdGame, setThirdGame,] = useState(true);
  const [showFourthGame, setFourthGame,] = useState(true);



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
      if(FourthGameShown == true)
      {
        setShowScreen(!showScreenSaver);
        setFourthGame(!showFourthGame);
        ScreenSaverShown = true;
        FourthGameShown = false;
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
      if(FourthGameShown == true)
      {
        setSecondGame(!showSecondGame);
        setFourthGame(!showFourthGame);
        SecondGameShown = true;
        FourthGameShown = false;
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
      if(FourthGameShown == true)
      {
        setThirdGame(!showThirdGame);
        setFourthGame(!showFourthGame);
        ThirdGameShown = true;
        FourthGameShown = false;
        return;
      }
    }
  }



  const button4Click = () => {
    if(FourthGameShown == true)
    {
      return;
    }
    else
    {
      if(ScreenSaverShown == true)
      {
        setShowScreen(!showScreenSaver);
        setFourthGame(!showFourthGame);
        ScreenSaverShown = false;
        FourthGameShown = true;
        return
      }
      if(SecondGameShown == true)
      {
        setSecondGame(!showSecondGame);
        setFourthGame(!showFourthGame);
        FourthGameShown = true;
        SecondGameShown = false;
        return
      }
      if(ThirdGameShown == true)
      {
        setThirdGame(!showThirdGame);
        setFourthGame(!showFourthGame);
        ThirdGameShown = false;
        FourthGameShown = true;
        return;
      }
    }
  }


    return (
    <div>
  
     {showScreenSaver && <Canvas/>}
      {!showSecondGame && <BallClick/>}
      {!showThirdGame && <CatchGame/>}

   

      {!showFourthGame && <Snake/>}
      <Computer></Computer>

      <Message></Message>

      <DialOne handleClick={button1Click} />

      <DialTwo handleClick={button2Click} />

      <DialThree handleClick={button3Click} />

      <DialFour handleClick={button4Click}/>

      <TodoList className="todo-list"></TodoList>

      <SpotifyPlaylistCard playlistUrl="https://open.spotify.com/playlist/37i9dQZF1DX0011TOiJEnw?si=6057a5c763244ff0"></SpotifyPlaylistCard>
     

    </div>
  );
}

export default App;
