import CategoryList from './CategoryList'
import MovieRow from './MovieRow'


const MovieTable = ({ inMovies, onDelete, onSort }) => {
    // useEffect( () => {}, [inMovies])

    return (
        <div className="MovieTable">
            <CategoryList onSort={onSort} />
            <MovieRow inMovies={inMovies} onDelete={onDelete}/>
        </div>
    )
}

export default MovieTable
