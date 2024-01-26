import './App.css';
import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import ResultList from './components/ResultList';
import Pagination from './components/Pagination';

function App() {
  let defaultPage = 0
  let defaultArticlesPerPage = 10
  let defaultResultCount = 100
  let defaultCountry = "US"
  
  const [data, setData] = useState(null);
  const [page, setPage] = useState(defaultPage);
  const [articlesPerPage] = useState(defaultArticlesPerPage);

  // Calculate Yesterday's date to default the datepicker to Yesterday
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const [date, setDate] = useState(yesterday);
  const [resultCount, setResultCount] = useState(defaultResultCount);
  const [country, setCountry] = useState(defaultCountry);

  const indexOfLastPost = page * articlesPerPage;
  const indexOfFirstPost = indexOfLastPost - articlesPerPage;
  const currentArticles = 
    (data !== "Invalid Data" && data) ? data.slice(indexOfFirstPost, indexOfLastPost) : null;
  
  // This is needed just for the specific logic of targeting the event.target.value
  function uptateResultCount(event) {
    setResultCount(event.target.value)
  }

  // Props to pass to the SearchBar component to execute the search
  const props = {
    data: data,
    dataSetter: setData,
    date: date,
    dateSetter: setDate,
    pageSetter: setPage,
    resultCount: resultCount,
    resultCountSetter: uptateResultCount,
    country: country,
    countrySetter: setCountry
  }

if (data && data !== "Invalid Data") {
  return (
    <div id='body' className='centerItem'>
      <div id="navbar"></div>
      <h1 className = "mainFont header">Top Wikipedia Articles</h1>
      <SearchBar props={props}/>
      <div className="resultList desktop-8 tablet-12 tablet-ex mobile-12">
        <ResultList results={currentArticles}/>
      </div>
      <Pagination 
        page={page}
        articlesPerPage={articlesPerPage}
        totalArticles={data?.length}
        updatePage={setPage}
      />
    </div>
  )
  } else if(data === "Invalid Data") {
    return (
      <div id='body' className='centerItem'>
        <div id="navbar"></div>
        <h1 className = "mainFont header">Top Wikipedia Articles</h1>
        <SearchBar props={props}/>
        <div className="resultList desktop-8 tablet-12 tablet-ex mobile-12">
          <ResultList results={data}/>
        </div>
      </div>
    )
  } else {
    return (
      <div id='body' className='centerItem'>
        <div id="navbar"></div>
        <h1 className = "mainFont header">Top Wikipedia Articles</h1>
        <SearchBar props={props}/>
      </div>
    )
  }
}

export default App;
