import './App.css';
import { useState, useEffect } from 'react'
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import Nominations from './components/Nominations';
import { Grid, Typography } from '@material-ui/core'
import Header from './components/Header'
import Footer from './components/Footer'
import { StaticBanner } from 'material-ui-banner';
import ErrorIcon from '@material-ui/icons/Error';

function App() {

  const [movies, setMovies] = useState([])
  const [nominations, setNominations] = useState([])

 //retrieve nominations from local storage
  useEffect(() => {
    const noms = JSON.parse(localStorage.getItem("noms") || "[]")
    setNominations(noms)
  }, [])

  //save nominations to local storage
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
        StaticBanner.show({
          icon: <ErrorIcon />,
          label: 'You have already nominated 5 movies. Remove existing nominations by clicking the trash can icon on the movie poster.',
        });
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
        <Grid item xs={false} sm={1} /> 
        <Grid item xs={12} sm={10}>

          <Nominations nominations={nominations} removeNomination={removeNomination}/>

          <Typography align="center" variant="h1">Search our movie database and nominate 5 of your favorites!</Typography>

          <br></br>
          <Search setResults={setResults}/>
          <br></br>

          {/* alert users they have already saved five nominations - conditionally displayed - see addNomination above */}
          <StaticBanner />

          <SearchResults movies={movies} nominations={nominations} addNomination={addNomination}/>
        
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
      <Grid item>

        <Footer />

      </Grid>
    </Grid>
  );
}

export default App;