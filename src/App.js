import MainComponent from "./MainComponent"
import {useState} from "react"
import "./App.css"

function App() {
  const [favs, setFavs] = useState([])

  return (
    <div className="App">
      <MainComponent favs={favs} setFavs={setFavs} />
    </div>
  )
}

export default App
