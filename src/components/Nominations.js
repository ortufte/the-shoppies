import React from 'react';

class Nominations extends React.Component {

    render() {

        const nominationsJSX = this.props.nominations.map(nom => 
            <li key={nom.imdbID}> { nom.Title }  { nom.Year }  <button onClick={() => this.props.removeNomination(nom)}>Remove</button></li>
        )

        return (
            <div className="nominations">
                <h3>Nominations</h3>
                { nominationsJSX }
            </div>
        )
    }
}

export default Nominations