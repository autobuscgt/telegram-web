import React, { useEffect } from 'react';
import './App.css';
import { useTelegram } from "./hooks/usefulComponents";
import logo from "./images/logotype.png";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from './pages/News';
import TimeTable from './pages/TimeTable';
import Homework from './pages/Homework';
import Main from './pages/Main';
function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg])
  return (
    <Router>
      <div className="App">

        <header style={{ padding: '40px' }}>
          <img src={logo} alt='logotype' class='logo' style={{ paddingBottom: 15, paddingLeft: '100px' }}></img>
          <h1 style={{ fontFamily: 'MyCustomFont', fontSize: '32px', float: 'left' }}>MKIT WEB APP</h1>
        </header>

        <nav style={{ padding: '7 7 7 7' }}>
          <div style={{ marginLeft: '2%', justifyContent: 'center' }}>
            <div class='containerdiv'>
              <div class='textinside'>
                <a href="/">
                  <div>
                    Главная
                  </div>
                </a>
              </div>
              <div class='containerforfirstbtn' style={{ marginLeft: '5px' }}>
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
          </div>
        </nav>
        
        <Routes>
          <Route exact path="/news" Component={News} />
          <Route exact path="/timetable" Component={TimeTable} />
          <Route exact path="/homework" Component={Homework} />
          <Route exact path="/" Component={Main} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
