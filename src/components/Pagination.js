import React from 'react'
import ReactPaginate from 'react-paginate';

export default function Pagination({page, articlesPerPage, totalArticles, pull_page}) {

  // Find the new page number after pagination to propegate upwards (add 1 to account for page 0)
  const paginate = ({ selected }) => {
    pull_page(selected + 1);
  };

  if (totalArticles) {
    return (
      <ReactPaginate
        onPageChange={paginate}
        pageCount={Math.ceil(totalArticles / articlesPerPage)}
        previousLabel={'<'}
        nextLabel={'>'}
        pageRangeDisplayed={2}
        containerClassName={'pagination desktop-8'}
        pageLinkClassName={'page-number'}
        previousLinkClassName={'page-number'}
        nextLinkClassName={'page-number'}
        activeLinkClassName={'active'}
        forcePage={page-1}
        siblingCount='1'
      />
    )
  } else {
    return null
  }
}
