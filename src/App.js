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
      
    <header style={{padding:40,marginLeft:0}}>
    <img src={logo} alt='logotype' class='logo' style={{float:'right'}}></img>
    <h1 style={{ fontFamily: 'MyCustomFont',float:'left'}}>MKIT WEB APP</h1>
    </header>
    
    <nav>
      <div class='containerdiv'>
        <div class='containerforfirstbtn' style={{marginLeft:50}}>
          <a href='/timetable'>
            <div class='textinside'>
              Расписание
            </div>
          </a>
        </div>
        
        <div class='containerforsecondbtn'>
          <a href='/homework'>
            <div class='textinside'>
              Домашнее задание
            </div>
          </a>
        </div>

        <div class='containerforthirdbtn'>
          <a href='/news'>
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
