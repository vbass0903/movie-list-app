import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const search = () => {
    fetch("https://imdb8.p.rapidapi.com/auto-complete?q=memento", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "e786be2e11msh733b0cf04d5f561p1b8ce3jsn82282c3ec453",
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    })
    .then(response => {
        console.log(response.json());

    })
    .catch(err => {
        console.error(err);
    });
}

const SearchBar = () => {
    return (
        <div className="SearchBar">
            <form noValidate autoComplete="off">
                <TextField id="filled-basic" label="Search for a Movie" variant="filled" />
            </form>
            <Button onClick={search()} color="primary" variant="contained">Search</Button>
        </div>

        // <div className="SearchBar">
        //     <input type='text' placeholder='Movie Title'></input>
        //     <input type='submit' value='Search'></input>
        // </div>
    )
}

export default SearchBar
