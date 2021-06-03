import SearchArea from './SearchArea'
import MovieTable from './MovieTable'
import { useState, useEffect } from 'react'


const Main = () => {
    const [movies, setMovies] = useState([])
    const [results, setResults] = useState([])
    const [searchText, setSearchText] = useState("")

    const textFieldChange = (e) => {
      setSearchText(e.target.value)
    }

    // Fetch movies from server on page load
    useEffect(() => {
      const getMovies = async () => {
        const moviesFromServer = await fetchMovies()
        setMovies(moviesFromServer)
      }
      getMovies()
    }, [])

    // Fetch movies
    const fetchMovies = async () => {
      const res = await fetch('http://localhost:5000/movies')
      const data = await res.json()
  
      return data
    }

    const search = async () => {
      if (searchText.length > 0) {
        await fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=" + searchText + "&page=1&type=movie&r=json", {
          "method": "GET",
          "headers": {
            "x-rapidapi-key": "e786be2e11msh733b0cf04d5f561p1b8ce3jsn82282c3ec453",
            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
          }
        })
        .then((response) => response.json())
        .then((data) => {
          data.Search.forEach(result => posterFix(result))
          setResults(data.Search)
        })
      }
      else {
        setResults([])
      }
    }

    const posterFix = (result) => {
      if (result.Poster === "N/A") {
        result.Poster = 'https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg'
      }
    }

    const getMovieInfo = async (movieID) => {
      await fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?i=" + movieID + "&r=json", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "e786be2e11msh733b0cf04d5f561p1b8ce3jsn82282c3ec453",
          "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
        }
      })
      .then((response) => response.json())
      .then(async (data)  => {
        posterFix(data)
        await fetch('http://localhost:5000/movies', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        setMovies([...movies, data])
      })
      setResults(results.filter((movie) => movie.imdbID !== movieID))
    }

    const deleteMovie = async (movieID) => {
      await fetch(`http://localhost:5000/movies/${movieID}`, {
        method: 'DELETE'
        })
        setMovies(movies.filter((movie) => movie.imdbID !== movieID))
    }


    // const sortName = (a, b, category) => {
    //   var nameA = a.category.toUpperCase(); // ignore upper and lowercase
    //   var nameB = b.category.toUpperCase(); // ignore upper and lowercase
    //   if (nameA < nameB) {
    //     return -1;
    //   }
    //   if (nameA > nameB) {
    //     return 1;
    //   }
    
    //   // names must be equal
    //   return 0;
    // }

    const sortMovies = async (category) => {
      const tempMovies = await fetchMovies()
      if (category === 'Title' || category === 'Director') {
        setMovies(tempMovies.sort(function(a, b) {
          var nameA = a[category].toUpperCase(); // ignore upper and lowercase
          var nameB = b[category].toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        
          // names must be equal
          return 0;
        }))
      }
      if (category === 'Year') {
        setMovies(tempMovies.sort(function (a, b) {
          return a.Year - b.Year;
        }))
      }
    }



    return (
        <div className="Main">
            <SearchArea inResults={results} onChange={textFieldChange} onAdd={getMovieInfo} onSearch={search} />
            <MovieTable inMovies={movies} onDelete={deleteMovie} onSort={sortMovies}/>
        </div>
    )
}

export default Main