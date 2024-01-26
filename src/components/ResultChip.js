import React from 'react'

export default function ResultChip({page}) {
  return (
    <div data-testid = "result-chip" className='pageResult'>
      <div id="page">
        <span id="rank">{page.rank} </span>
        {/* Replacing underscores with spaces so the results look better*/}
        <span id="article">{page.article.replace(/_/g, " ")} </span>
      </div>
      <span id="views">{page.views_ceil.toLocaleString()} views</span>
    </div>
  )
}
