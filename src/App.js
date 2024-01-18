import './App.css';
import SearchBar from './componentsSearchBar'
import MainDisplay from './components/ResultList';
import Pagination from './componentsPagination'

function App() {
  return (
    <>
      <SearchBar />
      <MainDisplay />
      <Pagination />
    </>
  )
}

export default App;
