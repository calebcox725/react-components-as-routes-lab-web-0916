import React from 'react'
import { directors } from '../data'

const directorsAsComponents = directors.map(director => {
  const movies = director.movies.map(movie => {
    return (
      <li>
        {movie}
      </li>
    )
  })

  return (
    <div>
      <h2>{director.name}</h2>
      <h3>Movies:</h3>
      <ul>
        {movies}
      </ul>
    </div>
  )
})

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsAsComponents}
    </div>
  )
}

module.exports = Directors
