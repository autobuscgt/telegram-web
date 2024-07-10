import React, { useEffect } from 'react';
import './App.css';
import { useTelegram } from "./hooks/usefulComponents";
import logo from "./images/logotype.png";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import News from './pages/News';
import TimeTable from './pages/TimeTable';
import Homework from './pages/Homework';
function App() {
  const {tg} = useTelegram();

  useEffect(() =>{
    tg.ready();
  },[tg])
  return (
    <Router>
    <div className="App">
    <header style={{padding:40,marginLeft:0}}>
    <img src={logo} alt='logotype' class='logo' style={{float:'right',paddingBottom:15}}></img>
    <h1 style={{ fontFamily: 'MyCustomFont',fontSize:'32px',float:'left'}}>MKIT WEB APP</h1>
    </header>
    
    <nav>
      <div class='containerdiv'>
        <div class='containerforfirstbtn' style={{marginLeft:'5px'}}>
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
     <Routes>
      <Route exact path="/news" Component={News}/>
      <Route exact path="/timetable" Component={TimeTable}/>
      <Route exact path="/homework" Component={Homework}/>
     </Routes>
     </div>
     </Router>
  );
}

export default App;
