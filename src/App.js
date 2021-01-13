import './App.css';
import { useState, useEffect } from 'react'
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import Nominations from './components/Nominations';
import { Grid, Typography } from '@material-ui/core'
import Header from './components/Header'
import Footer from './components/Footer'

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
 
    <Grid container direction="column" mb={2}>

      <Grid item>
        <Header />
      </Grid>

      <Grid item container justify="space-between">
        <Grid item xs={0} sm={1} /> 
        <Grid item xs={12} sm={10}>
          <Nominations nominations={nominations} removeNomination={removeNomination}/>
          <Typography align="center" variant="h1">Search our movie database and nominate 5 of your favorites! </Typography>
          <Search setResults={setResults}/>
          <SearchResults movies={movies} nominations={nominations} addNomination={addNomination}/>
        </Grid>
        <Grid item xs={0} sm={1} />

      </Grid>

      <Grid item>
        <Footer />
      </Grid>

    </Grid>
  );
}

export default App;