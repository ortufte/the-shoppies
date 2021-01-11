import React from 'react';

class SearchResults extends React.Component {

    render() {

        const resultsJSX = this.props.movies.map(movie => 
            <ul key={movie.imdbId}>
                <li>{ movie.Title }  { movie.Year }  <button>Nominate</button></li>
            </ul>)

        return (
            <container className="searchResults"> 
                <h3>Search Results</h3>
                { resultsJSX }
            </container>
        )
    }
}

export default SearchResults;