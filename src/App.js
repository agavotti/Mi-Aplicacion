import logo from './logo.svg';
import './App.css';
import React,{useState,useReducer} from 'react';
import Public from './Routes/Public';

function App() {
  const [mensaje,setMensaje] = useState('')
  return (
    <div className="App">
      <header className="App-header">
        <Public />
        
      </header>
    </div>
  );
}

export default App;
