import React, { useState } from "react";
import "./pagination.css";
import ReactPaginate from "react-paginate";
import PostElements from "../PostElements/PostElements";
import { useSelector } from "react-redux";

function Pagination() {
  const users = useSelector((state) => state.filtredData);

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPager = 1;
  const pagesVisited = pageNumber * usersPerPager;

  const pageCount = Math.ceil(users.length / usersPerPager);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      {users.slice(pagesVisited, pagesVisited + usersPerPager).map((el) => {
        return <PostElements key={el.id} obj={el} />;
      })}
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
