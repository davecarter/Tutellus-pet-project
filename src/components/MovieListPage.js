import React, { useEffect, useState } from "react"

import { Domain } from "../domain"
import { config } from "../domain/config"
import { useParams } from "react-router-dom"

import { MovieList } from "./MovieList"
import { Pagination } from "./Pagination"

const MovieListPage = () => {
  const domain = Domain.create()

  const [movieList, setMovieList] = useState([])
  const [{ page, totalPages, totalResults }, setPagination] = useState({})
  const [, setMovieType] = useState("")
  const { type, pageNumber } = useParams()

  useEffect(() => {
    setMovieType(type)
    domain.GetMovieListByTypeUseCase.execute({
      pageNumber,
      type
    }).then((data) => {
      setMovieList(data.movieEntityList)
      setPagination(data.pagination)
    })
  }, [type, pageNumber])

  const formatType = ({ type }) => config.type[type]

  return (
    <div className="tmdbMovieListPage">
      <h2 className="tmdbMovieList-title">
        List of {formatType({ type })} movies
      </h2>
      <Pagination
        page={page}
        totalPages={totalPages}
        totalResults={totalResults}
      />
      <MovieList movieList={movieList} />
    </div>
  )
}

export { MovieListPage }
