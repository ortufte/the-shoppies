import React from 'react';
import { Typography, Button } from '@material-ui/core';

class SearchResults extends React.Component {

    render() {

        const resultsJSX = this.props.movies.map(movie => 
 
            <li key={movie.imdbID}>
                <Typography variant="h4"> { movie.Title }  { movie.Year } </Typography>
                <Button 
                    size="small"
                    onClick={ () => this.props.addNomination(movie)} 
                    disabled={this.props.nominations.some(m => m.imdbID === movie.imdbID)}
                >Nominate</Button>
            </li>
        )

        return (
            <div className="searchResults" > 
                { resultsJSX }
            </div>
        )
    }
}

export default SearchResults;