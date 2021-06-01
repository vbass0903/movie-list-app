import Text from './Text'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(5),
      },
    },
  }));

const Movie = ( { inMovie, onDelete }) => {
    const classes = useStyles();

    const genres = inMovie.Genre.split(",")
    const directors = inMovie.Director.split(",")
    const actors = inMovie.Actors.split(",")
    return (
        <div className="Movie">
            <img src={inMovie.Poster} alt="Movie Poster"></img>
            <h4>{inMovie.Title}</h4>
            <h4>{inMovie.Year}</h4>
            <div className="DataList">
                {directors.map((dir, index) => (
                    <Text key={index} inText={dir}/>)
                )}
            </div>
            <div className="DataList">
                {genres.map((genre, index) => (
                    <Text key={index} inText={genre}/>)
                )}
            </div>
            <div className="DataList">
                {actors.map((actor, index) => (
                    <Text key={index} inText={actor}/>)
                )}
            </div>
            <IconButton  className={classes.root} color="default" onClick={() => onDelete(inMovie.imdbID)} aria-label="delete">
                <DeleteIcon size="large"/>
            </IconButton>
        </div>
    )
}

export default Movie
