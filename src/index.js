import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { render } from "react-dom"

import { NavigationBar } from "./components/NavigationBar"
import { MovieListPage } from "./components/MovieListPage"
import { DetailPage } from "./components/DetailPage"
import { HomePage } from "./components/HomePage"
import "./index.scss"

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Route path="/" exact children={<HomePage />} />
      <Route path="/:type" exact children={<MovieListPage />} />
      <Route path="/detail/:id" children={<DetailPage />} />
    </Router>
  )
}

const DOMelement = document.querySelector("#app")

render(<App />, DOMelement)

export { App }
