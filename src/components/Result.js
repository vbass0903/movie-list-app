import Button from '@material-ui/core/Button';

const Result = ({ result, onAdd }) => {
    return (
        <div className="Result">
            <img src={result.Poster} alt="Result poster"></img>
            <h4>{result.Title}</h4>
            <h4>{result.Year}</h4>
            <Button onClick={() => onAdd(result.imdbID)} color="primary" variant="contained">Add</Button>
        </div>
    )
}

export default Result
