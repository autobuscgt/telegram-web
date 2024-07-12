import React, { useEffect } from 'react';
import './styles/App.css';
import './styles/NavBar.css'
import { useTelegram } from "./hooks/usefulComponents";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from './pages/News';
import TimeTable from './pages/TimeTable';
import Homework from './pages/Homework';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg])

  return (
    <Router>
      <div className="App">
        <Header />

        <NavBar />

        <Routes>
          <Route exact path="/news" Component={News} />
          <Route exact path="/timetable" Component={TimeTable} />
          <Route exact path="/homework" Component={Homework} />
         
        </Routes>

        <Footer />
      </div>

    </Router>

  );
}


export default App;
