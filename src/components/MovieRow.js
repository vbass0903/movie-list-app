import Movie from './Movie'
import moviePoster from './Memento_poster.jpg'

const MovieRow = ({ movies }) => {
    let rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    let attributes = [moviePoster, "Memento", "2000", "Christopher Nolan", "Mystery", "Guy Pearce"]
    
    return (
        <div>
            {rows.map((movie) => (
                <Movie key={movie} attributes={attributes}/>)
            )}
        </div>
    )
}

export default MovieRow
