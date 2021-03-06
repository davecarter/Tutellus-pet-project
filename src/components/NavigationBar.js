import React from "react"
import { Link } from "react-router-dom"

const className = "tmdbNavigationBar"

const NavigationBar = () => (
  <article className={className}>
    <ul>
      <li>
        <Link to="/top_rated">Top Rated Movies</Link>
      </li>
      <li>
        <Link to="/popular">Popular</Link>
      </li>
    </ul>
  </article>
)

export { NavigationBar }
