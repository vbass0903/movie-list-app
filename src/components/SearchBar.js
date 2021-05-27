import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SearchBar = ({ onSearch, onChange }) => {
    
    const onSubmit = (e) => {
        e.preventDefault()
        onSearch()
    }

    return (
        <div className="SearchBar">
            <form noValidate autoComplete="off" onSubmit={onSubmit} className="SearchBarItem">
                <TextField id="filled-basic" label="Search for a Movie" variant="filled" onChange={onChange} />
            </form>
            <Button onClick={onSearch} color="primary" variant="contained">Search</Button>
        </div>

        // <div className="SearchBar">
        //     <input type='text' placeholder='Movie Title'></input>
        //     <input type='submit' value='Search'></input>
        // </div>
    )
}

export default SearchBar
