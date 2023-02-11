import React from "react";
import "./pagenation.css";
import PropTypes from 'prop-types'


const Pagenation = ({ numOfItems, onChangePage, currentPage, pageSize }) => {

    const numOfPages = Math.ceil(numOfItems / pageSize);

    return (
        <ul className="pagenation">
            {numOfPages > 1 ? Array.from({ length: numOfPages }, (_, index) => {
                const page = index + 1;
                return <li className={`page-item${page === currentPage ? "-active" : ""}`} key={`page${page}`}>
                    <button onClick={() => onChangePage(page)} >{page}</button>
                </li>
            }) : null}
        </ul >
    )
}

Pagenation.propTypes = {
    numOfItems: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired
};


export default Pagenation;