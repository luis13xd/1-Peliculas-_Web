import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

//importamos el archivo con rutas, despues del import puede ir culquier nombre luego de from va la ruta del archivo donde estan las rutas
import {MyRoutes} from "./routers/routes"

function App() {

  return (
    <div>
      <header>
        <h1 className='title'>🎬 Peliculas 🎬</h1>
      </header>
      <MyRoutes /> 
    </div>

  );
}

export default App;