import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { render } from "react-dom"

import { NavigationBar } from "./components/NavigationBar"
import { Header } from "./components/Header"
import { HomePage } from "./components/HomePage"
import { Searcher } from "./components/Searcher"
import "./index.scss"

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Header />
      <Route path="/" exact children={<Searcher />} />
      <Route path="/:type" children={<HomePage />} />
    </Router>
  )
}

const DOMelement = document.querySelector("#app")

render(<App />, DOMelement)

export { App }
