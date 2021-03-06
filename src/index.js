import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { render } from "react-dom"

import { NavigationBar } from "./components/NavigationBar"
import { Header } from "./components/Header"
import { HomePage } from "./components/HomePage"
import "./index.scss"

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Header />
      <Route path="/" component={HomePage} />
    </Router>
  )
}

const DOMelement = document.querySelector("#app")

render(<App />, DOMelement)

export { App }
