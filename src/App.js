import React from 'react'
import { MoviesGrid } from './components/MoviesGrid';
import './App.css'

const App = () => {
  return (
    <>
      <h1>Visualizador de películas y series</h1>
      <hr/>
      <MoviesGrid/>
    </>
  )
}

export default App;