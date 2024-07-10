import { useEffect } from 'react';
import './App.css';
import { useTelegram } from "./usefulComponents";

const tg = window.Telegram.WebApp;

function App() {
  const {onToggleButton, tg} = userTelegram();

  useEffect(() =>{
    tg.ready();
  },[])
  const onClose = () =>{
    tg.close()
  }
  return (
      <div className="App">
     <h1>Hello world</h1>
     <button onClick={onToggleButton}>Toggle</button>
     <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
