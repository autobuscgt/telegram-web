import React from 'react';
import '../styles/App.css';
//import { useEffect, useState } from 'react';
import WebPageDownloader from '../components/ParsedNews';
import '../styles/OpacityPrewie.css'
function News() {

  return (
    <div>
      <h1 style={{fontFamily: 'MyCustomFont',fontSize:'40px'}}>Новости</h1>
      <WebPageDownloader/>
    </div>
  );
}

export default News;
