import React from 'react';
import '../styles/App.css';
import '../styles/OpacityPrewie.css'
import TextParser from '../components/TimetableParser'
import '../styles/ParsedTest.css'
const TimeTable = () => {

  return (
    <div>
      <h1 style={{fontFamily:'MyCustomFont',fontSize:'42px'}}> Расписание </h1>
      <ul>
      <TextParser/>
      </ul>
    </div>
  );
};

export default TimeTable;