import './App.css';
import { useState } from 'react'
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import Nominations from './components/Nominations';

function App() {

  const [movies, setMovies] = useState([])
  
  const setResults = (movies) => {
    setMovies([]);
    setMovies(movies)
  }

  return (
    <div className="App">
      <h1> The Shoppies </h1>
      <Search setResults={setResults}/>
      <SearchResults movies={movies}/>
      <Nominations />
    </div>
  );
}

export default App;
