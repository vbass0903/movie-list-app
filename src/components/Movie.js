const Movie = ( { inMovie }) => {
//attributes[6]: poster[0], title[1], year[2], director[3], genre[4], actors[5] 

    return (
        <div className="Movie">
            <img src={inMovie.poster_url} alt="Movie Poster"></img>
            <h4>{inMovie.title}</h4>
            <h4>{inMovie.year}</h4>
            <h4>{inMovie.director}</h4>
            <h4>{inMovie.genre}</h4>
            <h4>{inMovie.actors}</h4>
        </div>
    )
}

export default Movie
