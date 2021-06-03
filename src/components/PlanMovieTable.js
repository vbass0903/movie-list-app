import CategoryList from './CategoryList'
import MovieRow from './MovieRow'

const PlanMovieTable = ({ inMovies, onDelete, onSort }) => {
    return (
        <div className="MovieTable">
            <CategoryList onSort={onSort} />
            <MovieRow inMovies={inMovies} onDelete={onDelete}/>
        </div>
    )
}

export default PlanMovieTable
