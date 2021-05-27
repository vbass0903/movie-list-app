import SearchBar from './SearchBar'
import ResultRow from './ResultRow'

const SearchArea = ( { onSearch, inResults, onChange, onAdd }) => {
    return (
        <div className="SearchArea">
            <SearchBar onSearch={onSearch} onChange={onChange}/>
            {inResults.length > 0 ? 
                (<ResultRow inResults={inResults} onAdd={onAdd}/>) :
                (<h3>No Results</h3>)}
        </div>
    )
}

export default SearchArea
