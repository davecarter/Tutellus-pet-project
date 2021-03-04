import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { render } from "react-dom"
import "./index.scss"

const HomePage = () => <h1>Hello!</h1>

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
    </Router>
  )
}

const DOMelement = document.querySelector("#app")

render(<App />, DOMelement)

export { App }
