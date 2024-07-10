import React, { useEffect } from 'react';
import './App.css';
import { useTelegram } from "./hooks/usefulComponents";
import logo from "./images/logotype.png"


function App() {
  const {tg} = useTelegram();

  useEffect(() =>{
    tg.ready();
  },[tg])
  return (
    <div className="App">
      <img src={logo} alt='logotype' class='logo'></img>
    <header>
      <h1 style={{ fontFamily: 'MyCustomFont'}}>MKIT WEB APP</h1>
    </header>
    
    <nav>
      <div class='containerdiv'>
        <div class='containerforfirstbtn'>
          <a href='https://www.youtube.com/watch?v=eW_lU8OdlN0'>
            <div class='textinside'>
              Расписание
            </div>
          </a>
        </div>
        
        <div class='containerforsecondbtn'>
          <a href='https://www.youtube.com/watch?v=eW_lU8OdlN0'>
            <div class='textinside'>
              Домашнее задание
            </div>
          </a>
        </div>

        <div class='containerforthirdbtn'>
          <a href='https://www.youtube.com/watch?v=eW_lU8OdlN0'>
            <div class='textinside'>
              Новости
            </div>
          </a>
        </div>
        </div>
    </nav>
    
     <main>
      <p>
     
      

      </p>
     </main>
     </div>
  );
}

export default App;
