import React from 'react'
import ResultChip from './ResultChip'

export default function ResultList({ results }) {
  console.log("Results "+results)
  if(results) {
    return (
      results.map(result => {
        return <ResultChip key={result.rank} page={result} />
      })
    )
  }
  else return (
    <div>
      No results
    </div>
  )
}
