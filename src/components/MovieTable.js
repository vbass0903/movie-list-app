import CategoryList from './CategoryList'
import MovieRow from './MovieRow'

const MovieTable = ({ inMovies, onDelete }) => {
    return (
        <div className="MovieTable">
            <CategoryList />
            <MovieRow inMovies={inMovies} onDelete={onDelete}/>
        </div>
    )
}

export default MovieTable
