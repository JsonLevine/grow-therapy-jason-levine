import React from 'react'
import ResultChip from './ResultChip'

export default function ResultList({ results }) {
  if(results === "Invalid Data") {
    return (
      <div className = 'failedSearch'>
        No data was found.  Most likely an invalid date was entered.
        Try adjusting your search parameters.
      </div>
    )
  }
  else if (results) {
    return (
      results.map(result => {
        return <ResultChip key={result.rank} page={result} />
      })
    )
  } else {
    return null
  }
}
