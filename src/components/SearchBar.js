import React from 'react'
import DatePicker from './DatePicker'
import ResultCountPicker from './ResultCountPicker'
import CountryPicker from './CountryPicker'

export default function SearchBar({props}) {

  // Format date to match YYYY/MM/DD/ for fetch query
  function convertDate(date) {
    const convertedDate = 
    date.getFullYear() + 
    '/' + ('0'+(date.getMonth()+1)).slice(-2) + // Slice here to get single digit months to display as "01"
    '/' + ('0' + date.getDate()).slice(-2) // Slice here to get single digit days to display as "01"
    return convertedDate;
  }

  // Fetch ranks from the given API
  function fetchData() {
    fetch('https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/'+convertDate(props.date))
      .then(response => response.json())
      .then(json => formatData(json))
      .catch(error => console.error(error));
  }

  // Filter out the "Main Page" and "Special:Search" pages that are almost always rank 1 & 2,
  // and adjust the ranks of all other pages accordingly (subtracting 2)
  function formatData(data) {
    let newData = data.items[0].articles.slice(0,props.resultCount)
    newData.forEach((el) => el.rank-= 2);
    props.dataSetter(newData.filter((el) => el.article !== "Main_Page" && el.article !== "Special:Search"));
  }

  return (
    <div className='centerItem searchBar'>
        <DatePicker value={props.date} setter={props.dateSetter} />
        <ResultCountPicker count={props.resultCount} setter={props.resultCountSetter}/>
        <CountryPicker />
        <button id='searchButton' onClick={fetchData}>Search</button>
    </div>
  )
}
