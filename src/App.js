import React, { useEffect } from 'react';
import './App.css';
import { useTelegram } from "./hooks/usefulComponents";
import logo from "./images/logotype.png"
import back from "./images/Back.svg"
import firstbtn from './images/buttons/1.svg'
import secondbtn from './images/buttons/2.svg'
import thirdbtn from './images/buttons/3.svg'

function App() {
  const {tg,onClose} = useTelegram();

  useEffect(() =>{
    tg.ready();
  },[tg])
  return (
    <div className="App">
    <header>
      <img src={logo} alt='logotype' class='logo'></img>
      <h1 style={{ fontFamily: 'MyCustomFont'}}>MKIT WEB APP</h1>
    </header>
    <nav>
      <div class='containerdiv'>
        <div class='containerforfirstbtn'>
          <a>
            <div class='textinside'>
              Расписание
            </div>
          </a>
        </div>
        
        <div class='containerforsecondbtn'>
          <a>
            <div class='textinside'>
              Домашнее задание
            </div>
          </a>
        </div>

        <div class='containerforthirdbtn'>
          <a>
            <div class='textinside'>
              Новости
            </div>
          </a>
        </div>
        </div>
    </nav>
     <img src={back} alt=" " class='BackGroundSVG'></img>
     <button onClick={onClose}>Закрыть</button>
     <main>
      <p>
        
        
      </p>
     </main>
     </div>
  );
}

export default App;
