import './App.css';
import { useState, useEffect } from 'react'
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import Nominations from './components/Nominations';

function App() {

  const [movies, setMovies] = useState([])
  const [nominations, setNominations] = useState([])

  //* nominations are stored in local storage and remain after page refresh
  //* meets the extra feature "Save nomination lists if the user leaves the page"
  useEffect(() => {
    const noms = JSON.parse(localStorage.getItem("noms") || "[]")
    setNominations(noms)
  }, [])

  useEffect(() => {
    localStorage.setItem("noms", JSON.stringify(nominations))
  }, [nominations])
  
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