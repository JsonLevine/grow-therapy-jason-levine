import React from 'react'
import ResultChip from './ResultChip'

export default function ResultList({ results }) {
  return (
    results.map(result => {
      return <ResultChip result={result} />
    })
  )
}
