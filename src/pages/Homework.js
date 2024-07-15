import React from 'react';
import '../styles/App.css';
import '../styles/NavBar.css'
import '../styles/OpacityPrewie.css'
import HomeworkViewer from '../components/HomeworkViewer';
function Homework() {

  return (
    <div>
      <h1 style={{ fontFamily: 'MyCustomFont', fontSize: '40px' }}>Домашнее задание</h1>
      
      <HomeworkViewer/>
    </div>
  );
}

export default Homework;
