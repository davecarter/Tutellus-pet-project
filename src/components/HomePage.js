import React, { useState } from "react"
import { Domain } from "../domain"
import { MovieList } from "./MovieList"

const className = "tmdbHomePage"

export const HomePage = () => {
  const domain = Domain.create()
  const [searchQuery, setSearchQuery] = useState("")
  const [movieList, setMovieList] = useState([])

  const handleInput = (evt) => setSearchQuery(evt.target.value)
  const handleSubmit = () => {
    console.log("SENDING", searchQuery)
    domain.GetMovieListBySearchQueryUseCase.execute({
      searchQuery
    }).then((data) => {
      setMovieList(data.movieEntityList)
    })
  }

  return (
    <div className={`${className}-hero`}>
      <h1>Search The Movie Database</h1>
      <div className={`${className}-searchbox`}>
        <input
          className={`${className}-input`}
          onChange={(evt) => handleInput(evt)}
          onFocus={() => setSearchQuery(" ")}
          type="text"
          placeholder={"insert movie title"}
          value={searchQuery}
        />
        <button className={`${className}-submit`} onClick={handleSubmit}>
          search
        </button>
      </div>
      <MovieList movieList={movieList} />
    </div>
  )
}
