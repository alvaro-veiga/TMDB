import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"

import "./MovieGrid.css"

const moviesURL = process.env.REACT_APP_TMDB_API
const apiKey = process.env.REACT_APP_TMDB_API_KEY

const Home = () => {
    const [topMovies, SetTopMovies] = useState([])
    
    const getTopRatedMovies = async (url) => {

        const res = await fetch(url)
        const data = await res.json()
        
        SetTopMovies(data.results)
    }

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
        getTopRatedMovies(topRatedUrl)
    }, [])

  return (
    <div className="container">
      <h2 className="title">Best moveis:</h2>
      <div className="movies-container">
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Home
