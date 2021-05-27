import SearchArea from './SearchArea'
import MovieTable from './MovieTable'
import { useState, useEffect } from 'react'
import moviePoster from './Memento_poster.jpg'
import moviePoster2 from './2001SpaceOdyssey.jpg'
import moviePoster3 from './Minari_(film).png'
import moviePoster4 from './Hereditary.jfif'
import moviePoster5 from './Soul_Poster.jpeg'
import moviePoster6 from './1917.jpg'


const Main = () => {
    const [movies, setMovies] = useState([])
    const [results, setResults] = useState([])
    const [searchText, setSearchText] = useState("")
    const APIKEY = "ef50a47c9bmsh02413c615f333cfp1bee65jsnaa281abb3a5b"

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

    const search2 = async () => {
      console.log("clicked")
      const res = await fetch('http://localhost:5000/movies')

      .then((response) => response.json())
      .then((data) => {
        const searchResults = data
        setResults(searchResults)
      })
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
      const res = await fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?i=" + movieID + "&r=json", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "e786be2e11msh733b0cf04d5f561p1b8ce3jsn82282c3ec453",
          "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
        }
      })
      .then((response) => response.json())
      .then(async (data)  => {
        posterFix(data)
        const res = await fetch('http://localhost:5000/movies', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        setMovies([...movies, data])
      })
    }

    return (
        <div className="Main">
            <SearchArea onSearch={search} inResults={results} onChange={textFieldChange} onAdd={getMovieInfo}/>
            <MovieTable inMovies={movies}/>
        </div>
    )
}

export default Main


    // const search = async () => {
    //   console.log("clicked")
    //   if (searchText.length > 0) {
    //     const res = await fetch("https://imdb8.p.rapidapi.com/auto-complete?q=" + searchText, {
    //       "method": "GET",
    //       "headers": {
    //           "x-rapidapi-key": APIKEY,
    //           "x-rapidapi-host": "imdb8.p.rapidapi.com"
    //       }
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       const searchResults = data.d.map(searchResult => filterResults(searchResult))
    //       setResults(searchResults)
    //     })
    //   }
    //   else {
    //     setResults([])
    //   }
    // }

    // const getDirector = async (movieID) => {
    //   const res = await fetch("https://imdb8.p.rapidapi.com/title/get-full-credits?tconst=" + movieID, {
    //     "method": "GET",
    //     "headers": {
    //       "x-rapidapi-key": APIKEY,
    //       "x-rapidapi-host": "imdb8.p.rapidapi.com"
    //     }
    //   })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data.crew.director[0].name)
    //     return (data.crew.director[0].name)
    //   })
    // }

    // const getGenre = async (movieID) => {
    //   const res = await fetch("https://imdb8.p.rapidapi.com/title/get-genres?tconst=" + movieID, {
    //     "method": "GET",
    //     "headers": {
    //       "x-rapidapi-key": APIKEY,
    //       "x-rapidapi-host": "imdb8.p.rapidapi.com"
    //     }
    //   })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data)
    //     return (data)
    //   })
    // }

        // const filterResults = async (searchResult) => {



      

    //   // if (newDirector === undefined) {
    //   //   newDirector = "Unknown"
    //   // }
    //   // if (newGenre === undefined) {
    //   //   newGenre = "Unknown"
    //   // }

    //   let movie = {
    //     poster: searchResult.i,
    //     id: searchResult.id,
    //     title: searchResult.l,
    //     year: searchResult.y,
    //     director: "TEST",
    //     genre: "TEST",
    //     actors: searchResult.s
    //   }



    //   if (movie.poster === undefined) {
    //     movie.poster = {
    //       height: 1600,
    //       imageUrl: 'https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg',
    //       width: 1200
    //     }
    //   }
    //   if (movie.year === undefined) {
    //     movie.year = 'Unknown'
    //   }
    //   return movie
    // }
