import { useEffect } from 'react';
import './App.css';
import { useTelegram } from "./hooks/usefulComponents";
import logo from "./images/title.png"
function App() {
  const {onToggleButton, tg,onClose} = useTelegram();

  useEffect(() =>{
    tg.ready();
  },[tg])
  return (
      <div className="App">
     <h1>Elements</h1>
     <img src={logo} alt='Test Screen'></img>
     <button onClick={onToggleButton}>Toggle</button>
     <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
