import React from 'react';
import '../styles/App.css';
import '../styles/OpacityPrewie.css'
function TimeTable() {
  return (
    <div>
      <h1 style={{ fontFamily: 'MyCustomFont', fontSize: '40px' }}>Расписание</h1>
      <select>
        <option value={'9IS>'}>
          9-ИС
        </option>


      </select>

    </div>
  );
}

export default TimeTable;
