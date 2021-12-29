import React, {useState} from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavComponent from "./NavComponent"
import SearchComponent from "./SearchComponent"
import FavComponent from "./FavComponent"
import {Container} from "react-bootstrap"

export default function MainComponent() {
  const [favs, setFavs] = useState([])

  return (
    <Container>
      <Router>
        <NavComponent favs={favs} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <SearchComponent favs={favs} setFavs={setFavs} />
            )}></Route>
          <Route
            exact
            path="/favs"
            render={() => (
              <FavComponent favs={favs} setFavs={setFavs} />
            )}></Route>
        </Switch>
      </Router>
    </Container>
  )
}
