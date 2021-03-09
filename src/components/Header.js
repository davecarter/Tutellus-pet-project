import React from "react"

const className = "tmdbHeader"

const Header = ({
  movieTitle = "The Movie Database",
  tagline = "Domestika Pet Project"
}) => (
  <article className={className}>
    <h1>{movieTitle}</h1>
    <h3>{tagline}</h3>
  </article>
)

export { Header }
