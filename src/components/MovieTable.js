import CategoryList from './CategoryList'
import MovieRow from './MovieRow'

const MovieTable = ({ inMovies }) => {
    return (
        <div className="MovieTable">
            <CategoryList />
            <MovieRow inMovies={inMovies}/>
        </div>
    )
}

export default MovieTable
