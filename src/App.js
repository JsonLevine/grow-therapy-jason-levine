import './App.css';
import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import ResultList from './components/ResultList';
import Pagination from './components/Pagination';

function App() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [articlesPerPage] = useState(10);
  // Calculate Yesterday's date to default the datepicker to Yesterday
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const [date, setDate] = useState(yesterday);
  // 102 instead of 100 because we later filter out 2 specific pages
  const [resultCount, setResultCount] = useState(102);

  const indexOfLastPost = page * articlesPerPage;
  const indexOfFirstPost = indexOfLastPost - articlesPerPage;
  const currentArticles = data?.slice(indexOfFirstPost, indexOfLastPost);
  
  function pull_result_count(event) {
    setResultCount(event.target.value)
  }
  const props = {
    data: data,
    dataSetter: setData,
    date: date,
    dateSetter: setDate,
    resultCount: resultCount,
    resultCountSetter: pull_result_count
  }

if (data) {
  return (
    <div id='body' className='centerItem'>
      <h1 className = "mainFont header">Top Wikipedia Articles</h1>
      <SearchBar props={props}/>
      <div className="resultList">
        <ResultList results={currentArticles}/>
      </div>
      <Pagination 
        articlesPerPage={articlesPerPage}
        totalPosts={data?.length}
        pull_page={setPage}
      />
    </div>
  )
  } else {
    return (
      <div id='body' className='centerItem'>
        <h1 className = "mainFont header">Top Wikipedia Articles</h1>
        <SearchBar props={props}/>
      </div>
    )
  }
}

export default App;
