import Result from './Result'
import moviePoster from './Memento_poster.jpg'
//attributes[3]: poster, title, year

const ResultRow = ( { results } ) => {
    let rows = [1, 2, 3]
    let attributes = [moviePoster, "Memento", "2000"]

    return (
        <div>
            {rows.map((result) => (
                <Result key={result} attributes={attributes}/>)
            )}
        </div>
    )
}

export default ResultRow
