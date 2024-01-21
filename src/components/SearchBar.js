import React, { useState } from 'react'
import DatePicker from './DatePicker'
import ResultCountPicker from './ResultCountPicker'
import CountryPicker from './CountryPicker'

export default function SearchBar() {
  const [data, setData] = useState(null);
  const [date, setDate] = useState(null);
  const [resultCount, setResultCount] = useState(null);

  const pull_date = (date) => {
    const convertedDate = 
    date.getFullYear() + 
    '/' + ('0'+(date.getMonth()+1)).slice(-2) + // Slice here to get single digit months to display as "01"
    '/' + ('0' + date.getDate()).slice(-2)// Slice here to get single digit days to display as "01"
    
    setDate(convertedDate)
  }
  const pull_result_count = (resultCount) => {
    setResultCount(resultCount)
  }

  function fetchData() {
    fetch('https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/'+date)
      .then(response => response.json())
      .then(json => formatData(json))
      .catch(error => console.error(error));
  }

  function formatData(data) {
    setData(data.items[0].articles.slice(0,resultCount))
  }

  return (
    <>
        <DatePicker setter={pull_date} />
        <ResultCountPicker setter={pull_result_count}/>
        <CountryPicker />
        <button id='searchButton' onClick={fetchData}>Search</button>
        <div>
          Date: {date}
          ResultCount: {resultCount}
          [{JSON.stringify(data)}]
        </div>
    </>
  )
}
