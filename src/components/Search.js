import React from 'react';

const Search = () => {

    const [movie, setMovie] = React.useState('')

    return (
        <div>
            <h3>Search Movies</h3>
            <input 
            name="search"
            // style={BarStyling}
            placeholder="i.e. Terminator"
            onChange={(e) => setMovie(e.target.value)}
            />
            <h1> {movie} </h1>
        </div>
    )
}

export default Search;