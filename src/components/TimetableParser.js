import React, { useState, useEffect } from 'react';
import myTextfile from './AllGroups.txt'

function TextParser() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(myTextfile)
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onload = () => {
          const text = new TextDecoder("windows-1251").decode(reader.result);
          const groups = text.split('\n'); 
          const formatedGroups = groups.map(group => formatGroup(group));
          setData(formatedGroups);
        };
        reader.readAsArrayBuffer(blob);
      })
      .catch(error => console.error('Ошибка при загрузке данных:', error));
  }, []);

  const formatGroup = (group) => {
    const weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];
    return weekDays.reduce((formattedGroup, weekDay) => {
      const regex = new RegExp(weekDay, 'i');
      if (regex.test(formattedGroup)) {
        return formattedGroup.replace(regex, `<span style="font-size: 24px;">${weekDay}\n</span>`);
      }
      return formattedGroup;
    }, group);
  };

  return (
    <div>
      <ul>
        {data.map((group, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: group }}></li>
        ))}
      </ul>
    </div>
  );
}

export default TextParser;
