import React from 'react'
import { MoviesGrid } from './components/MoviesGrid';
import './App.css'

const App = () => {
  return (
    <>
      <h1>Visualizar Peliculas del año 2020</h1>
      <hr/>
      <MoviesGrid/>
    </>
  )
}

export default App;