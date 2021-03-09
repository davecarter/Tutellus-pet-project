import React, { useState, useEffect } from "react"
import { Domain } from "../domain"
import { useParams } from "react-router-dom"

import { Header } from "./Header"
import { MovieCard } from "./MovieCard"

const className = "tmdbDetailPage"

const DetailPage = () => {
  const domain = Domain.create()
  const { id } = useParams()
  const [data, setMovieData] = useState("")

  useEffect(() => {
    domain.GetMovieByIdUseCase.execute({
      movieId: id
    }).then((response) => {
      setMovieData(response)
    })
  }, [])

  const {
    title,
    tagline,
    poster,
    description,
    movieId = id,
    rating,
    released
  } = data

  return (
    <>
      <Header movieTitle={title} tagline={tagline} />
      <div className={className}>
        <MovieCard
          isDetail
          title={title}
          poster={poster}
          description={description}
          rating={rating}
          released={released}
        />
      </div>
    </>
  )
}

export { DetailPage }
