import React from 'react'
import { actors } from '../data'

const actorsAsComponents = actors.map(actor => {
  const movies = actor.movies.map(movie => {
    return (
      <li>
        {movie}
      </li>
    )
  })

  return (
    <div>
      <h2>{actor.name}</h2>
      <h3>Movies:</h3>
      <ul>
        {movies}
      </ul>
    </div>
  )
})

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsAsComponents}
    </div>
  )
}

module.exports = Actors
