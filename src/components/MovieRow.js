import Movie from './Movie'


const MovieRow = ({ inMovies }) => {
    let rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    // let attributes = [moviePoster, "Memento", "2000", "Christopher Nolan", "Mystery", "Guy Pearce"]
    
    return (
        <div>
            {inMovies.map((movie) => (
                <Movie key={movie.id} inMovie={movie}/>)
            )}
        </div>
    )
}

export default MovieRow
