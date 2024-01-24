import React from 'react'

export default function ResultChip({page}) {
  return (
    <div className='pageResult'>
      <div id="page">
        <span id="rank">{page.rank} </span>
        <span id="article">{page.article.replace(/_/g, " ")} </span>
      </div>
      <span id="views">{page.views.toLocaleString()} views</span>
    </div>
  )
}
