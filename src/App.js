import React, { useEffect } from 'react';
import './styles/App.css';
import './styles/Buttons.css'
import { useTelegram } from "./hooks/usefulComponents";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from './pages/News';
import TimeTable from './pages/TimeTable';
import Homework from './pages/Homework';
import Main from './pages/Main';
import NavBar from './NavBar';
import Header from './pages/Header';
function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg])
  return (
    <Router>
      <div className="App">
        <Header/>

        <NavBar/>
        <Routes>
          <Route exact path="/news" Component={News} />
          <Route exact path="/timetable" Component={TimeTable} />
          <Route exact path="/homework" Component={Homework} />
          <Route exact path="/" Component={Main} />
        </Routes>
        
        <News />
      </div>

    </Router>

  );
}

export default App;
