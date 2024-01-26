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
    fetch('https://wikimedia.org/api/rest_v1/metrics/pageviews/top-per-country/'+props.country+'/all-access/'+convertDate(props.date))
      .then(response => response.json())
      .then(json => formatData(json))
      .catch(error => console.error(error));

    props.pageSetter(1)
  }

  // Filters out the correct number of articles to show
  function formatData(data) {
    if (!data.detail) {
      let newData = data.items[0].articles.slice(0,props.resultCount)
      props.dataSetter(newData);
    } else {
      props.dataSetter("Invalid Data")
    }
  }

  return (
    <div className='centerItem searchBar desktop-8 tablet-12 tablet-ex mobile-12 hide-radius'>
        <DatePicker value={props.date} setter={props.dateSetter} />
        <ResultCountPicker count={props.resultCount} setter={props.resultCountSetter}/>
        <CountryPicker country={props.country} setter={props.countrySetter} />
        <button id='searchButton' className="desktop-3 tablet-3 mobile-10" onClick={fetchData}>Search</button>
    </div>
  )
}
