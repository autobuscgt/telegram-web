import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

function WebPageDownloader() {
  const [webPageContent, setWebPageContent] = useState('');

  useEffect(() => {
    const downloadWebPage = async () => {
      try {
        const response = await axios.get('https://mkit.online/news/');
        setWebPageContent(response.data);

        // Сохранение содержимого веб-страницы в файл
        const blob = new Blob([response.data], { type: 'text/html;charset=utf-8' });
        saveAs(blob, 'allgroup3.html');
      } catch (error) {
        console.error('Ошибка при загрузке веб-страницы:', error);
      }
    };

    downloadWebPage();
  }, []);

  return (
    <div>
      <h1>Загруженная веб-страница</h1>
      <pre>{webPageContent}</pre>
    </div>
);
}

export default WebPageDownloader;
