import React, { useState } from 'react'
import { useFetchMovies } from '../Hooks/useFetchMovies'
import { MoviesGridItem } from './MoviesGridItem'
import { MovieSortHeader } from './MovieSortHeader'

export const MoviesGrid = () => {

  const { data: movies, loading } = useFetchMovies()

  console.log(movies)

  return (
    <>
      {/* <h5>Titulo:  Love Año: 2020 Tipo: Pelicula </h5> */}
      <MovieSortHeader/>
      {loading && <p className='card animate__animated animate__heartBeat'> Loading . . .</p>}
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
