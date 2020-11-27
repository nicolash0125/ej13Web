import React, { useState, useEffect } from "react";
import Errores from './errores.jpeg'
export default function Personaje() {
  const [personaje, setPersonaje] = useState(null);

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("joke") === null) {
        setPersonaje("Loading...");
      } else {
        setPersonaje(localStorage.getItem("joke"));
      }
    } else {
      const URL = "https://api.chucknorris.io/jokes/random";
      fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          setPersonaje(res.value);
          localStorage.setItem("joke", res.value);
        });
    }
  }, []);
  return (

    <>
    <h1>Personajes de marvel</h1>
    <p>No esta disponible el api de marvel. Se hace el fectch a los chistes</p>
    <img src= {Errores}></img>
      
      {personaje}
    </>
  );
}
