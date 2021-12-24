import React, {useState, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavComponent from "./NavComponent"
import SearchComponent from "./SearchComponent"
import FavComponent from "./FavComponent"
import {Container} from "react-bootstrap"

export default function MainComponent({favs, setFavs}) {
  //   const [favs, setFavs] = useState([])
  //   const [comic, setComic] = useState("")
  //   const [startDate, setStartDate] = useState("2015-01-01")
  //   const [endDate, setEndDate] = useState("2021-12-01")
  //   const [limit, setLimit] = useState(5)
  //   const [orderChange, setOrderChange] = useState("")
  //   const [apiData, setApiData] = useState([])
  //   const [isLoading, setLoading] = useState(false)
  //   const [loader, loaderActive] = useState(false)
  //   const [errorMessage, setErrorMessage] = useState(null)

  //   const timestamp = 1
  //   const apiKey = "ee1be0ed47fa16c1180ea42bf4c51dc3"
  //   const hash = "abb8397e8f309853a6979c66696c8ee7"
  //   const apiUrl = `https://gateway.marvel.com:443/v1/public/comics?dateRange=${startDate}%2C${endDate}&titleStartsWith=${comic}&orderBy=${orderChange}&limit=${limit}&ts=${timestamp}&apikey=${apiKey}&hash=${hash}`
  //   console.log(favs)

  //   const setFavorite = (item) => {
  //     setFavs([...favs, item])
  //     console.log(item)
  //   }

  return (
    <Container>
      <Router>
        <NavComponent favs={favs} />
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/favs">
            <Favs />
          </Route>
        </Switch>
      </Router>
    </Container>
  )

  function Search() {
    return (
      <div>
        <SearchComponent
          favs={favs}
          setFavs={setFavs}
          //   setFavorite={setFavorite}
          //   apiUrl={apiUrl}
          //   loaderActive={loaderActive}
          //   isLoading={isLoading}
          //   loader={loader}
          //   setLoading={setLoading}
          //   setErrorMessage={setErrorMessage}
          //   errorMessage={errorMessage}
          //   setApiData={setApiData}
          //   apiData={apiData}
          //   comic={comic}
          //   setComic={setComic}
          //   startDate={startDate}
          //   setStartDate={setStartDate}
          //   endDate={endDate}
          //   setEndDate={setEndDate}
          //   limit={setLimit}
          //   setLimit={setLimit}
          //   orderChange={setOrderChange}
          //   setOrderChange={setOrderChange}
        />
      </div>
    )
  }

  function Favs() {
    return (
      <div>
        <FavComponent favs={favs} setFavs={setFavs} />
      </div>
    )
  }
}
