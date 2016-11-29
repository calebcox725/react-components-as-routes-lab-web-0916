import React from 'react'
import { movies } from '../data'

const moviesAsComponents = movies.map(movie => {
  const genres = movie.genres.map(genre => {
    return (
      <li>
        {genre}
      </li>
    )
  })

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.time} minutes, {movie.metascore}/100</p>
      <ul>
        {genres}
      </ul>
    </div>
  )
})

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesAsComponents}
    </div>
  )
}

module.exports = Movies
