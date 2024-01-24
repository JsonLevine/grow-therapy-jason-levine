import React, { useState } from 'react'
import DatePicker from './DatePicker'
import ResultCountPicker from './ResultCountPicker'
import CountryPicker from './CountryPicker'

export default function SearchBar({setter}) {
  const [data, setData] = useState(null);
  const [date, setDate] = useState(null);
  const [resultCount, setResultCount] = useState(100);
  setter(data)

  // Pull the desired date from the DatePicker component, and format it to match MM/DD/YYYY
  const pull_date = (date) => {
    const convertedDate = 
    date.getFullYear() + 
    '/' + ('0'+(date.getMonth()+1)).slice(-2) + // Slice here to get single digit months to display as "01"
    '/' + ('0' + date.getDate()).slice(-2) // Slice here to get single digit days to display as "01"
    setDate(convertedDate)
  }

  // Pull the desired number of results from the ResultCountPicker component
  const pull_result_count = (resultCount) => {
    setResultCount(resultCount.target.value)
  }

  // Fetch ranks from the given API
  function fetchData() {
    fetch('https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/'+date)
      .then(response => response.json())
      .then(json => formatData(json))
      .catch(error => console.error(error));
  }

  // Filter out the "Main Page" and "Special:Search" pages that are almost always rank 1 & 2,
  // and adjust the ranks of all other pages accordingly (subtracting 2)
  function formatData(data) {
    let newData = data.items[0].articles.slice(0,resultCount)
    newData.forEach((el) => el.rank-= 2);
    setData(newData.filter((el) => el.article !== "Main_Page" && el.article !== "Special:Search"));
  }

  return (
    <div className='centerItem searchBar'>
        <DatePicker setter={pull_date} />
        <ResultCountPicker value={resultCount} setter={pull_result_count}/>
        <CountryPicker />
        <button id='searchButton' onClick={fetchData}>Search</button>
    </div>
  )
}
