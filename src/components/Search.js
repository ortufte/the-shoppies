import React from 'react';

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

    const getMovies = async (query) => {
        const url = `http://www.omdbapi.com/?apikey=59ccd6eb&s=${query}&type=movie`
        const response = await fetch(url);
        const jsonData = await response.json();
        if (!jsonData.Error) {
            setResults(jsonData.Search)
            console.log(jsonData.Search)
        } 
    }

    return (
        <div>
            <h3>Search Movies</h3>
            <input 
                name="search"
                // style={BarStyling}
                placeholder="i.e. Terminator"
                onChange={(e) => handleInputChange(e)}
            />
        </div>
    )
}

export default Search;