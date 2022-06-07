import React from 'react'

export const MoviesGridItem = ({ title, poster, type, year }) => {

    return (
        <div className='card animate__animated animate__backInUp'>
            <img src={poster} alt={title} />
            <span className='floated-text-img-right'>{year}</span>
            <p> {title} </p>
            <span className='floated-text-img-left'>{type}</span>
        </div>
    )
}
