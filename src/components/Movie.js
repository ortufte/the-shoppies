import React from 'react';

const Movie  = () => {

    const [nominated, setNominated] = useState([])

    const handleClick = () => {
        setNominated(true)
        addNomination(movie)
    }

    returns(
        <div>
            onClick={() => handleClick}
        </div>
    )
}

export default Movie;