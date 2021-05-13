const Result = ({ attributes }) => {
//attributes[3]: poster, title, year

    return (
        <div className="Result">
            <img src={attributes[0]} alt="Result poster"></img>
            <h4>{attributes[1]}</h4>
            <h4>{attributes[2]}</h4>
            <button>Add</button>
        </div>
    )
}

export default Result
