import React from "react"
import { Link } from "react-router-dom"

const className = "tmdbNavigationBar"

const NavigationBar = () => (
  <article className={className}>
    <ul className={`${className}-container`}>
      <li className={`${className}-item`}>
        <Link className={`${className}-link`} to="/">
          Homepage
        </Link>
      </li>
      <li className={`${className}-item`}>
        <Link className={`${className}-link`} to="/top_rated">
          Top Rated Movies
        </Link>
      </li>
      <li className={`${className}-item`}>
        <Link className={`${className}-link`} to="/popular">
          Popular
        </Link>
      </li>
    </ul>
  </article>
)

export { NavigationBar }
