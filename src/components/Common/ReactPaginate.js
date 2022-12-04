import React from 'react';
import ReactPaginate from 'react-paginate';

const ReactPaginateComponent = (props) => {
  const { totalPage, handlePageClick } = props;

  return (
    <ReactPaginate
      previousLabel={<i className="	fa fa-caret-left"></i>}
      nextLabel={<i className="	fa fa-caret-right"></i>}
      pageClassName={' page-item'}
      pageCount={totalPage}
      marginPagesDisplayed={0}
      pageRangeDisplayed={4}
      pageLinkClassName={' page-link'}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      breakLabel={'...'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      activeClassName={'active'}
      previousClassName={' page-item'}
      nextClassName={' page-item'}
      previousLinkClassName={' page-link'}
      nextLinkClassName={' page-link'}
    />
  );
};

export default ReactPaginateComponent;
