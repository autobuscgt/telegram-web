import React, { useEffect } from 'react';
import './App.css';
import { useTelegram } from "./hooks/usefulComponents";
import logo from "./images/logotype.png"
import back from "./images/Back.svg"

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
          <a href='#'>
            <div class='textinside'>
              Расписание
            </div>
          </a>
        </div>
        
        <div class='containerforsecondbtn'>
          <a href='#'>
            <div class='textinside'>
              Домашнее задание
            </div>
          </a>
        </div>

        <div class='containerforthirdbtn'>
          <a href='#'>
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
