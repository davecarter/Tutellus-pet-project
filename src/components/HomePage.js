import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { MovieList } from "./MovieList"

const HomePage = () => {
  return (
    <div className="tmdbHomePage">
      <Switch>
        <Route path="/:type" children={<MovieList />} />
      </Switch>
    </div>
  )
}

export { HomePage }
