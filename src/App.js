import './App.css';
import { useState } from 'react'
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import Nominations from './components/Nominations';

function App() {

  const [movies, setMovies] = useState([])
  const [nominations, setNominations] = useState([])
  
  const setResults = (movies) => {
    setMovies([]);
    setMovies(movies)
  }

  const addNomination = (movie) => {
    if (nominations.length < 5) {
      setNominations([
        ...nominations, movie
      ]);
    } else {
        alert("You have already nominated 5 movies!")
    }
  }

  const removeNomination = (movie) => {
    setNominations(nominations.filter(m => m !== movie))
  }

  return (
    <div className="App">
      <h1> The Shoppies </h1>
      <Search setResults={setResults}/>
      <SearchResults movies={movies} nominations={nominations} addNomination={addNomination}/>
      <Nominations nominations={nominations} removeNomination={removeNomination}/>
    </div>
  );
}

export default App;
