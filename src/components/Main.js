import SearchArea from './SearchArea'
import MovieTable from './MovieTable'
import { useState } from 'react'
import moviePoster from './Memento_poster.jpg'
import moviePoster2 from './2001SpaceOdyssey.jpg'
import moviePoster3 from './Minari_(film).png'
import moviePoster4 from './Hereditary.jfif'
import moviePoster5 from './Soul_Poster.jpeg'
import moviePoster6 from './1917.jpg'

const Main = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            poster_url: moviePoster,
            title: "Memento",
            year: 2000,
            director: "Christopher Nolan",
            genre: "Mystery",
            actors: "Guy Pearce"
          },
        //   {
        //     id: 2,
        //     poster_url: moviePoster2,
        //     title: "2001: A Space Odyssey",
        //     year: 1968,
        //     director: "Stanley Kubrick",
        //     genre: "Science Fiction",
        //     actors: "Keir Dullea"
        //   },
          {
            id: 3,
            poster_url: moviePoster3,
            title: "Minari",
            year: 2020,
            director: "Lee Isaac Chung",
            genre: "Drama",
            actors: "Steven Yeun"
          },
          {
            id: 4,
            poster_url: moviePoster4,
            title: "Hereditary",
            year: 2018,
            director: "Ari Aster",
            genre: "Horror",
            actors: "Toni Collette"
          },
          {
            id: 5,
            poster_url: moviePoster5,
            title: "Soul",
            year: 2020,
            director: "Pete Doctor",
            genre: "Animated",
            actors: "Jamie Foxx"
          },
          {
            id: 6,
            poster_url: moviePoster6,
            title: "1917",
            year: 2019,
            director: "Sam Mendes",
            genre: "Action",
            actors: "George MacKay"
          }

    ])

    const [results, setResults] = useState([])

    return (
        <div className="Main">
            <SearchArea inResults={results}/>
            <MovieTable inMovies={movies}/>
        </div>
    )
}

export default Main
