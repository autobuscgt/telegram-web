import React from 'react';
import '../styles/App.css';
import '../styles/OpacityPrewie.css'
import TextParser from '../components/TimetableParser'
function TimeTable() {
  return (
    <div>
      <h1 style={{ fontFamily: 'MyCustomFont', fontSize: '40px' }}>Расписание</h1>
      <select>
        <option value={'9IS>'}>
          9-ИС123
        </option>
        <option value={'9IS>'}>
          9-ИС321
        </option>
        <option value={'9IS>'}>
          9-ИС
        </option>

      </select>
      <TextParser class = 'timetable'/>
    </div>
  );
}

export default TimeTable;
