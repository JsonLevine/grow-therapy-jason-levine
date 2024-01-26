import React from 'react'
import ReactPaginate from 'react-paginate';

export default function Pagination({page, articlesPerPage, totalArticles, pull_page}) {

  // Find the new page number after pagination to propegate upwards (add 1 to account for page 0)
  const paginate = ({ selected }) => {
    pull_page(selected);
  };

  const pages = Math.ceil(totalArticles / articlesPerPage);
  function handleNext() {
    pull_page(page+1);
  };
  
  // handler for the previous button
  function handlePrevious() {
    pull_page(page-1);
  };

  if (totalArticles) {
    return (
    <div className="pagination">
      <Button onClick={handlePrevious} disabled={page <= 1}>{'<'}</Button>
      { pages - page < 1 && page - 4 > 0 && <Button onClick={() => pull_page(page - 4)}>{page - 4}</Button> }
      { pages - page < 2 && page - 3 > 0 && <Button onClick={() => pull_page(page - 3)}>{page - 3}</Button> }
      { pages && page - 2 > 0 && <Button onClick={() => pull_page(page - 2)}>{page - 2}</Button> }
      { pages && page - 1 > 0 && <Button onClick={() => pull_page(page - 1)}>{page - 1}</Button> }
      <Button active={true}>{page}</Button>
      { page + 1 <= pages && <Button onClick={() => pull_page(page + 1)}>{page + 1}</Button> }
      { page + 2 <= pages && <Button onClick={() => pull_page(page + 2)}>{page + 2}</Button> }
      { page + 3 <= pages && page < 3 && <Button onClick={() => pull_page(page + 3)}>{page + 3}</Button> }
      { page + 4 <= pages && page < 2 && <Button onClick={() => pull_page(page + 4)}>{page + 4}</Button> }
      <Button onClick={handleNext} disabled={page === pages}>{'>'}</Button>
    </div>
    )
  } else {
    return null
  }
}

function Button({ children, ...props }) {
  return (
    <button className={props.active ? 'active page-number' : 'page-number' } {...props}>{children}</button>
  );
};

{/* <ReactPaginate
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
/> */}