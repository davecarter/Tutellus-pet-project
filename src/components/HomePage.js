import React, { useState } from "react"
import { Domain } from "../domain"
import { MovieList } from "./MovieList"

const className = "tmdbHomePage"

export const HomePage = () => {
  const domain = Domain.create()
  const [searchQuery, setSearchQuery] = useState("")
  const [movieList, setMovieList] = useState([])
  const [displayTitle, setDisplayTitle] = useState(false)
  const [displayMovieList, setDisplayMovieList] = useState(false)

  const handleInput = (evt) => {
    setSearchQuery(evt.target.value)
  }

  const clearInput = () => {
    setDisplayTitle(false)
    setDisplayMovieList(false)
    setSearchQuery("")
  }

  const handleSubmit = () => {
    setDisplayTitle(true)
    domain.GetMovieListBySearchQueryUseCase.execute({
      searchQuery
    }).then((data) => {
      setDisplayMovieList(true)
      setMovieList(data.movieEntityList)
    })
  }

  const handleTitleContent = () => {
    return movieList.length !== 0
      ? `List of movies based on ${searchQuery}`
      : "No results"
  }

  return (
    <>
      <div className={`${className}-hero`}>
        <h1>Search The Movie Database</h1>
        <div className={`${className}-searchbox`}>
          <input
            className={`${className}-input`}
            onChange={(evt) => handleInput(evt)}
            onFocus={clearInput}
            type="text"
            placeholder={"insert movie title"}
            value={searchQuery}
          />
          <button className={`${className}-submit`} onClick={handleSubmit}>
            search
          </button>
        </div>
      </div>
      <div className="tmdbMovieListPage">
        {displayTitle && (
          <h2 className="tmdbMovieList-title">{handleTitleContent()}</h2>
        )}
        {displayMovieList && <MovieList movieList={movieList} />}
      </div>
    </>
  )
}
