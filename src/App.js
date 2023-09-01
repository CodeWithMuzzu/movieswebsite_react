import React, { useState } from "react"
import { useEffect } from "react"
import "./App.css"
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard"

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=abbeae9"

const App = () => {

  const [defaultName, setdefaultName] = useState('')

  const [Movies, setMovies] = useState([])

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)

    const data = await response.json();

    setMovies(data.Search)
  }

  // const movie1 = {
  //   "Title": "The Amazing Spiderman 2 Webb Cut",
  //   "Year": "2021",
  //   "imdbID": "tt18351128",
  //   "Type": "movie",
  //   "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
  // }

  useEffect(() => {
    searchMovies("Spiderman")
  }, [])

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input placeholder="Search For a Movie" value={defaultName} onChange={(e) => { let name = e.target.value; setdefaultName(name) }} />
        <img src={SearchIcon} alt="SearchIcon" onClick={() => { defaultName !== null ? searchMovies(defaultName) : searchMovies("batman") }} />
      </div>

      <div className="container">
        {Movies.length > 0 ?
          Movies.map((movie) => {
            return <MovieCard movie1={movie} />
          })
          : <h3>Movies Not found</h3>}
      </div>
    </div>
  );
}

export default App;
