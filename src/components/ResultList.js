import React from 'react'
import ResultChip from './ResultChip'

export default function ResultList({ results }) {
  if(results) {
    return (
      results.map(result => {
        return <ResultChip page={result} />
      })
    )
  }
  else return (
    null
  )
}
