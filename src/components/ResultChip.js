import React from 'react'

export default function ResultChip({page}) {
  return (
    // 'data-testid' added here strictly to find these from within tests
    <div data-testid = "result-chip" className='pageResult'>
      <div id="page">
        <span id="rank">{page.rank} </span>
        <span id="article">{page.article.replace(/_/g, " ")} </span>
      </div>
      <span id="views">{page.views.toLocaleString()} views</span>
    </div>
  )
}
