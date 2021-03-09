import React, { useEffect, useState } from "react"
import { Domain } from "../domain"
import { MovieCard } from "./MovieCard"

import { useParams } from "react-router-dom"

export const MovieList = () => {
  const [movieList, setMovieList] = useState([])
  const [, setMovieType] = useState("")
  const domain = Domain.create()
  let { type } = useParams()

  useEffect(() => {
    setMovieType(type)
    domain.GetMovieListByTypeUseCase.execute({
      pageNumber: 1,
      type
    }).then((data) => {
      setMovieList(data.movieEntityList)
    })
  }, [type])

  return (
    <>
      <h2 className="tmdbMovieList-title">List of {type} movies</h2>
      {movieList.map((movie) => {
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
      })}
    </>
  )
}
