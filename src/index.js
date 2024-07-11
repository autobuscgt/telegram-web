import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TimeTable from './pages/TimeTable';
import Homework from './pages/Homework';
import News from './pages/News';
import Main from './pages/Main';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Main/>
    <TimeTable/>
    <News/>
    <Homework/>
  </React.StrictMode>
);

