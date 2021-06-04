import SearchArea from './SearchArea'
import MovieTable from './MovieTable'
import PlanMovieTable from './PlanMovieTable'
import { useState, useEffect } from 'react'
import Stats from './Stats'


const Main = ({ inScreen }) => {
    const [movies, setMovies] = useState([])
    const [planMovies, setPlanMovies] = useState([])

    const [results, setResults] = useState([])
    const [searchText, setSearchText] = useState("")

    const textFieldChange = (e) => {
      setSearchText(e.target.value)
    }

    // Fetch movies from server on page load
    useEffect(() => {
      const getMovies = async () => {
        const moviesFromServer = await fetchMovies("list")
        setMovies(moviesFromServer)
        const planMoviesFromServer = await fetchMovies("plan")
        setPlanMovies(planMoviesFromServer)
      }
      getMovies()
    }, [])

    // Fetch movies
    const fetchMovies = async (screen) => {
      const res = await fetch(`http://localhost:5000/${screen}Movies`)
      const data = await res.json()
      console.log(data)
  
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
        await fetch(`http://localhost:5000/${inScreen}Movies`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        if (inScreen === "list") {
          setMovies([...movies, data])
        }
        else {
          setPlanMovies([...planMovies, data])
        }
        
      })
      setResults(results.filter((movie) => movie.imdbID !== movieID))
    }

    const deleteMovie = async (movieID) => {
      await fetch(`http://localhost:5000/${inScreen}Movies/${movieID}`, {
        method: 'DELETE'
        })
        if (inScreen === "list") {
          setMovies(movies.filter((movie) => movie.imdbID !== movieID))
        }
        else {
          setPlanMovies(planMovies.filter((movie) => movie.imdbID !== movieID))
        }
        
    }

    const sortMovies = async (category) => {
      const tempMovies = await fetchMovies(inScreen)
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
      else if (category === 'Year') {
        setMovies(tempMovies.sort(function (a, b) {
          return a.Year - b.Year;
        }))
      }
      else if (category === 'Metascore') {
        setMovies(tempMovies.sort(function (a, b) {
          return b.Metascore - a.Metascore;
        }))
      }
    }



    return (
        <div className="Main">
            <SearchArea inResults={results} onChange={textFieldChange} onAdd={getMovieInfo} onSearch={search} />
            { inScreen === "list" ?
              <MovieTable inMovies={movies} onDelete={deleteMovie} onSort={sortMovies}/> : 
              inScreen === "plan" ?
              <PlanMovieTable inMovies={planMovies} onDelete={deleteMovie} onSort={sortMovies}/> :
              <Stats inMovies={movies} inPlanMovies={planMovies}/>
            }
        </div>
    )
}

export default Main