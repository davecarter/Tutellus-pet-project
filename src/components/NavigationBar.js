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
        <Link className={`${className}-link`} to="/now_playing/page/1">
          Now Playing
        </Link>
      </li>
      <li className={`${className}-item`}>
        <Link className={`${className}-link`} to="/top_rated/page/1">
          Top Rated Movies
        </Link>
      </li>
      <li className={`${className}-item`}>
        <Link className={`${className}-link`} to="/popular/page/1">
          Popular
        </Link>
      </li>
      <li className={`${className}-item`}>
        <Link className={`${className}-link`} to="/upcoming/page/1">
          Upcoming
        </Link>
      </li>
    </ul>
  </article>
)

export { NavigationBar }
