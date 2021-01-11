import './App.css';
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import Nominations from './components/Nominations';

function App() {
  return (
    <div className="App">
      <h1> The Shoppies </h1>
      <Search />
      <SearchResults />
      <Nominations />
    </div>
  );
}

export default App;
