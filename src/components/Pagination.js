import React from 'react'

export default function Pagination({page, articlesPerPage, totalArticles, updatePage}) {

  const numPages = Math.ceil(totalArticles / articlesPerPage);

  // Handle incrementing the page
  function handleNext() {
    updatePage(page+1);
  };

  // Handle decrementing the page
  function handlePrevious() {
    updatePage(page-1);
  };

  // Custom button component for pagination
  function Button({ children, ...props }) {
    return (
      <button className={props.active ? 'active page-number' : 'page-number' } {...props}>{children}</button>
    );
  };

  if (totalArticles) {
    return (
      <div className="pagination">
        <Button onClick={handlePrevious} disabled={page <= 1}>{'<'}</Button>
        { numPages - page < 1 && page - 4 > 0 && <Button onClick={() => updatePage(page - 4)}>{page - 4}</Button> }
        { numPages - page < 2 && page - 3 > 0 && <Button onClick={() => updatePage(page - 3)}>{page - 3}</Button> }
        { numPages && page - 2 > 0 && <Button onClick={() => updatePage(page - 2)}>{page - 2}</Button> }
        { numPages && page - 1 > 0 && <Button onClick={() => updatePage(page - 1)}>{page - 1}</Button> }
        <Button active="true">{page}</Button>
        { page + 1 <= numPages && <Button onClick={() => updatePage(page + 1)}>{page + 1}</Button> }
        { page + 2 <= numPages && <Button onClick={() => updatePage(page + 2)}>{page + 2}</Button> }
        { page + 3 <= numPages && page < 3 && <Button onClick={() => updatePage(page + 3)}>{page + 3}</Button> }
        { page + 4 <= numPages && page < 2 && <Button onClick={() => updatePage(page + 4)}>{page + 4}</Button> }
        <Button onClick={handleNext} disabled={page === numPages}>{'>'}</Button>
      </div>
    )
  } else {
    return null
  }
}
