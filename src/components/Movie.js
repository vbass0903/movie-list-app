const Movie = ( { inMovie }) => {
//attributes[6]: poster[0], title[1], year[2], director[3], genre[4], actors[5] 

    return (
        <div className="Movie">
            <img src={inMovie.Poster} alt="Movie Poster"></img>
            <h4>{inMovie.Title}</h4>
            <h4>{inMovie.Year}</h4>
            <h4>{inMovie.Director}</h4>
            <h4>{inMovie.Genre}</h4>
            <h4>{inMovie.Actors}</h4>
        </div>
    )
}

export default Movie
