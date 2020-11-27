import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Personaje from './Personaje.js';

function App() {
  const [personaje, setPersonaje] = useState(null);

  useEffect(()=>{
    if(!navigator.onLine){
        if(localStorage.getItem("joke") === null) {
          setPersonaje("Loading...")
        } else {
          setPersonaje(localStorage.getItem("joke"));
        }
    } else {
        const URL = "https://api.chucknorris.io/jokes/random";
        fetch(URL).then(res=>res.json()).then(res=>{
            setPersonaje(res.value);
            localStorage.setItem("joke", res.value);
        })
    }
}, []);
  return (
    <div className="App">
      <header className="App-header">
        <Personaje></Personaje>
      </header>
    </div>
  );
}

export default App;
