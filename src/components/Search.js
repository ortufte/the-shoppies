import React from 'react';
import { Input } from '@material-ui/core';

const Search = ({ setResults }) => {

    const handleInputChange = (e) => {
        const query = e.target.value
        if (query.length < 3) {
            setResults([])
        }
        else if (query.length >= 3) {
            getMovies(query)
        }
    }
    const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

    const getMovies = async (query) => {
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&type=movie`
        const response = await fetch(url);
        const jsonData = await response.json();
        if (!jsonData.Error) {
            setResults(jsonData.Search)
        } 
    }

    return (
        <div>
            <Input 
                type="search"
                fullWidth
                placeholder="i.e. Terminator"
                onChange={(e) => handleInputChange(e)}
            />
        </div>
    )
}

export default Search;