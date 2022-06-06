import React from 'react'

export const MoviesGridItem = ({title, poster, type, year}) => {
    console.log("title" + title)
    console.log("poster" + poster)
    console.log("type"+ type)
    console.log("year" + year)
    return (
        <div className='card'>
            <img src={poster} alt={title} />
            <p> {title} </p>
            <p>{type}</p>
            <p>{year}</p>
        </div>
    )
}
