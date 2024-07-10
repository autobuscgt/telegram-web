import { useEffect } from 'react';
import './App.css';
import { useTelegram } from "./usefulComponents";


function App() {
  const {onToggleButton, tg,onClose} = useTelegram();

 
  return (
      <div className="App">
     <h1>Hello world</h1>
     <button onClick={onToggleButton}>Toggle</button>
     <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
