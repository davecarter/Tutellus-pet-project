import React, { useEffect, useState } from "react"

import { Domain } from "../domain"
import { config } from "../domain/config"
import { useParams } from "react-router-dom"

import { MovieList } from "./MovieList"

const MovieListPage = () => {
  const domain = Domain.create()

  const [movieList, setMovieList] = useState([])
  const [, setMovieType] = useState("")

  const { type } = useParams()

  useEffect(() => {
    setMovieType(type)
    domain.GetMovieListByTypeUseCase.execute({
      pageNumber: 1,
      type
    }).then((data) => {
      setMovieList(data.movieEntityList)
    })
  }, [type])

  const formatType = ({ type }) => config.type[type]

  return (
    <div className="tmdbMovieListPage">
      <h2 className="tmdbMovieList-title">
        List of {formatType({ type })} movies
      </h2>
      <MovieList movieList={movieList} />
    </div>
  )
}

export { MovieListPage }
