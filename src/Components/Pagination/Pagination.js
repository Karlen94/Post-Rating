import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { ReactComponent as ArrowLeft } from "../../images/icon/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../images/icon/arrow-right.svg";
import styles from "./Paginate.module.css";

const PrevComponent = () => {
  return (
    <div className={styles.componentStyle}>
      <span>
        <ArrowLeft />
      </span> 
      <span className={styles.componentStyle__text}>Назад</span>
    </div>
  );
};

const NextComponent = () => {
  return (
    <div className={styles.componentStyle}>
      <span className={styles.componentStyle__text}>Вперед</span>
      <span>
        <ArrowRight />
      </span>
    </div>
  );
};

export const Paginate = ({ products, handlePageClick, currentPage }) => {
  const pageCount = products?.meta?.links.slice(1, -1);
  return (
    <div className="pt-3 pb-3 border-top pr-3 pl-3">
      <ReactPaginate
        initialPage={currentPage ? (currentPage-1) : 0}
        previousLabel={<PrevComponent />}
        nextLabel={<NextComponent />}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount?.length}
        previousClassName={styles.previous}
        nextClassName={styles.next}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={(event) => handlePageClick(event)}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
        disableInitialCallback={true}
      />
    </div>
  );
};