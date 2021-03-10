import React, { useState } from "react"
import { Domain } from "../domain"
import { MovieList } from "./MovieList"

const className = "tmdbHomePage"

export const HomePage = () => {
  const domain = Domain.create()
  const [searchQuery, setSearchQuery] = useState("")
  const [movieList, setMovieList] = useState([])
  const [displayTitle, setDisplayTitle] = useState(false)

  const handleInput = (evt) => setSearchQuery(evt.target.value)
  const handleSubmit = () => {
    setDisplayTitle(true)
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
      <div className="tmdbMovieListPage">
        {displayTitle && (
          <h2 className="tmdbMovieList-title">
            {`List of movies based on ${searchQuery}`}
          </h2>
        )}
        <MovieList movieList={movieList} />
      </div>
    </div>
  )
}
