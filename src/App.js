import './App.css';
import SearchBar from './components/SearchBar'
import ResultList from './components/ResultList';
import Pagination from './components/Pagination';

let results = []
function App() {
  return (
    <>
      <SearchBar />
      <ResultList results={results}/>
      <Pagination />
    </>
  )
}

export default App;
