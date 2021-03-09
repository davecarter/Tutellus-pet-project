import React from "react"
import { Link } from "react-router-dom"

const className = "tmdbMovieCard"
const classNameDetail = "tmdbMovieCardDetail"

const MovieCard = ({
  isDetail,
  title,
  poster,
  id,
  description,
  rating,
  released
}) => {
  const renderLink = () =>
    isDetail ? (
      <img className={`${className}-poster`} src={poster} />
    ) : (
      <Link to={`/detail/${id}`}>
        <img className={`${className}-poster`} src={poster} />
      </Link>
    )

  return (
    <article className={isDetail ? classNameDetail : className}>
      <div className={`${className}-top`}>
        {!isDetail && <h2 className={`${className}-title`}>{title}</h2>}
        {renderLink()}
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
}

export { MovieCard }
