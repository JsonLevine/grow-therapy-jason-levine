import React from 'react'
import DatePicker from './DatePicker'
import ResultCountPicker from './ResultCountPicker'
import CountryPicker from './CountryPicker'
import SearchButton from './SearchButton'

export default function SearchBar() {
  return (
    <>
        <DatePicker />
        <ResultCountPicker />
        <CountryPicker />
        <SearchButton />
    </>
  )
}
