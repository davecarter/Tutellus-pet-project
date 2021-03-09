import React from "react"

const className = "tmdbMovieCard"

const MovieCard = ({ title, poster, id, description, rating, released }) => (
  <article className={className}>
    <div className={`${className}-top`}>
      <h2 className={`${className}-title`}>{title}</h2>
      <img className={`${className}-poster`} src={poster} />
    </div>
    <div className={`${className}-bottom`}>
      <p className={`${className}-description`}>{description}</p>
      <div className={`${className}-meta`}>
        <p className={`${className}-rating`}>
          Rating: <strong>{rating}</strong>
        </p>
        <p className={`${className}-released`}>
          Released: <strong>{released}</strong>
        </p>
      </div>
    </div>
  </article>
)

export { MovieCard }
