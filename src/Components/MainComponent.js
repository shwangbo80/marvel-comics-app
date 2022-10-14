import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavComponent from "./NavComponent";
import SearchComponent from "./SearchComponent";
import FavComponent from "./FavComponent";
import {Container} from "react-bootstrap";

export default function MainComponent() {
  const [favs, setFavs] = useState([]);
  const [comic, setComic] = useState("");

  const setFavorite = (item) => {
    if (favs.indexOf(item) === -1) {
      setFavs([...favs, item]);
    } else {
      alert("Item is already added to favs");
    }
  };

  return (
    <Router>
      <NavComponent favs={favs} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <SearchComponent
              favs={favs}
              setFavs={setFavs}
              comic={comic}
              setComic={setComic}
              setFavorite={setFavorite}
            />
          )}></Route>
        <Route
          exact
          path="/favs"
          render={() => (
            <FavComponent
              favs={favs}
              setFavs={setFavs}
              setFavorite={setFavorite}
            />
          )}></Route>
      </Switch>
    </Router>
  );
}
