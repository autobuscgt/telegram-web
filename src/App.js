import React, { useEffect } from 'react';
import './styles/App.css';
import './styles/Buttons.css'
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

        <header style={{ padding: '50px' }}>
          <img src={logo} alt='logotype' class='logo' style={{ paddingBottom: 15, paddingLeft: '100px' }}></img>
          <h1 style={{ fontFamily: 'MyCustomFont', fontSize: '32px', float: 'left' }}>MKIT WEB APP</h1>
        </header>

        <nav style={{ paddingLeft:'1px' }}>
        <div>
          <button class='NavBar' id='Nav1' style={{ fontFamily: 'MyCustomFont' }}>
            Главная
          </button>
          <button class='NavBar' id='Nav2' style={{ fontFamily: 'MyCustomFont' }}>
            Расписание
          </button>
          <button class='NavBar' id='Nav3' style={{ fontFamily: 'MyCustomFont' }}>
            Домашнее задание
          </button>
          <button class='NavBar' id='Nav4' style={{ fontFamily: 'MyCustomFont' }}>
            Новости
          </button>
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
