import Movie from './Movie'


const MovieRow = ({ inMovies }) => {
    return (
        <div>
            {inMovies.map((movie, index) => (
                <Movie key={index} inMovie={movie}/>)
            )}
        </div>
    )
}

export default MovieRow
