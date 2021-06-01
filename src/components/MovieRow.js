import Movie from './Movie'


const MovieRow = ({ inMovies, onDelete }) => {
    return (
        <div>
            {inMovies.map((movie, index) => (
                <Movie key={movie.imdbID} inMovie={movie} onDelete={onDelete}/>)
            )}
        </div>
    )
}

export default MovieRow
