import React from "react"
import { MovieCard } from "./MovieCard"

export const MovieList = ({ movieList = [] }) => {
  return movieList.map((movie) => {
    const { title, description, poster, rating, released, id } = movie
    return (
      <MovieCard
        key={id}
        id={id}
        title={title}
        poster={poster}
        description={description}
        rating={rating}
        released={released}
      />
    )
  })
}
