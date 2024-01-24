import React from 'react'
import ReactPaginate from 'react-paginate';

export default function Pagination({articlesPerPage, totalPosts, pull_page}) {

  // Find the new page number after pagination to propegate upwards (add 1 to account for page 0)
  const paginate = ({ selected }) => {
    pull_page(selected + 1);
  };

  if (totalPosts) {
    return (
      <ReactPaginate
        onPageChange={paginate}
        pageCount={Math.ceil(totalPosts / articlesPerPage)}
        previousLabel={'<'}
        nextLabel={'>'}
        pageRangeDisplayed={4}
        containerClassName={'pagination'}
        pageLinkClassName={'page-number'}
        previousLinkClassName={'page-number'}
        nextLinkClassName={'page-number'}
        activeLinkClassName={'active'}
  />
    )
  } else {
    return null
  }
}
