import Result from './Result'
import moviePoster from './Memento_poster.jpg'

const ResultRow = ( { inResults, onAdd } ) => {
    

    return (
    <div className='ResultRow'>
        {inResults.map((result, index) => (
            <Result key={index} result={result} onAdd={onAdd}/>)
        )}
    </div>
    )
    


}

export default ResultRow
