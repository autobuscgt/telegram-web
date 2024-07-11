import React from 'react';
import '../styles/App.css';
//import { useEffect, useState } from 'react';
import NewsComponent from '../components/ParsedNews';
import '../styles/OpacityPrewie.css'
function News() {

  return (
    <div>
      <h1 style={{fontFamily: 'MyCustomFont',fontSize:'40px'}}>Новости</h1>
      <NewsComponent/>
    </div>
  );
}

export default News;
