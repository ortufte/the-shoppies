import React from 'react';
// import Movie from './Movie'

class SearchResults extends React.Component {

    render() {

        const resultsJSX = this.props.movies.map(movie => 
 
            <li key={movie.imdbId}> { movie.Title }  { movie.Year }  <button onClick={ () => this.props.addNomination(movie)} disabled={this.props.nominations.includes(movie)}>Nominate</button></li>
      
        )


        return (
            <div className="searchResults"> 
                <h3>Search Results</h3>
                { resultsJSX }
            </div>
        )
    }
}

export default SearchResults;