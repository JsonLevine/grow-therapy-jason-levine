import './App.css';
import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import ResultList from './components/ResultList';
import Pagination from './components/Pagination';

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [articlesPerPage] = useState(10);

  const pull_data = (data) => {
    setData(data)
  }
  const pull_page = (page) => {
    setPage(page)
  }

  const indexOfLastPost = page * articlesPerPage;
  const indexOfFirstPost = indexOfLastPost - articlesPerPage;
  const currentArticles = data?.slice(indexOfFirstPost, indexOfLastPost);
  
if (data) {
  return (
    <div id='body' className='centerItem'>
      <h1 className = "mainFont header">Top Wikipedia Articles</h1>
      <SearchBar setter={pull_data}/>
      <div className="resultList">
        <ResultList results={currentArticles}/>
      </div>
      <Pagination 
        articlesPerPage={articlesPerPage}
        totalPosts={data?.length}
        pull_page={pull_page}
      />
    </div>
  )
  } else {
    return (
      <div id='body' className='centerItem'>
        <h1 className = "mainFont header">Top Wikipedia Articles</h1>
        <SearchBar setter={pull_data}/>
      </div>
    )
  }
}

export default App;
