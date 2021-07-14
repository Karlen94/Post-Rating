import React, { useState } from "react";
import "./pagination.css";
import ReactPaginate from "react-paginate";
import PostElements from "../PostElements/PostElements";

function Pagination({ data, toggleNewCommentModal }) {
  const users = data;
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPager = 1;
  const pagesVisited = pageNumber * usersPerPager;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPager)
    .map((el) => {
      return (
        <PostElements
          key={el.id}
          obj={el}
        />
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPager);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      {displayUsers}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
  );
}

export default Pagination;
