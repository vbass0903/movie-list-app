const Movie = ( { attributes }) => {
//attributes[6]: poster[0], title[1], year[2], director[3], genre[4], actors[5] 

    return (
        <div className="Movie">
            <img src={attributes[0]} alt="Movie Poster"></img>
            <h4>{attributes[1]}</h4>
            <h4>{attributes[2]}</h4>
            <h4>{attributes[3]}</h4>
            <h4>{attributes[4]}</h4>
            <h4>{attributes[5]}</h4>
        </div>
    )
}

export default Movie
