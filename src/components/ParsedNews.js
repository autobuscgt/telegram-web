import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsComponent = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://mkit.online/news/');
        setNews(response.data.result);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <ul>
        {news.map((item, index) => (
          <li key={index}>
            <h3>{item.message}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsComponent;
