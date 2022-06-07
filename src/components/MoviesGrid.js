import React, { useState } from 'react'
import { useFetchMovies } from '../Hooks/useFetchMovies'
import { MoviesGridItem } from './MoviesGridItem'
import { MovieSortHeader } from './MovieSortHeader'
import 'animate.css';

export const MoviesGrid = () => {

  const { data: movies, loading } = useFetchMovies()

  return (
    <>
      <MovieSortHeader/>
      {loading && <p className='card animate__animated animate__fadeIn loading-text'> Loading . . . </p>}
      {movies.length === 0 && <p className='card animate__animated animate__fadeIn loading-text'> No se encontraron peliculas, intentelo de nuevo </p>}
      <div className='card-grid'>
        {movies.map(movie => (
          <MoviesGridItem
            key={movie.imdbID}
            poster={movie.Poster}
            title={movie.Title}
            type={movie.Type}
            year={movie.Year}
          />
        ))}
      </div>
    </>
  )
}
