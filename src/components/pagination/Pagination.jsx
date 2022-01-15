import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash';
const Pagination = (props) => {
    const {pageSize , count , currentPage , onPageChange} = props ;

    const pagesCount = Math.ceil(count / pageSize) ;
    const Pages = _.range(1 , pagesCount+1)

    if (pagesCount === 1) return null ;

    return (
        <nav aria-label="...">
            <ul className="pagination pagination-lg">
            {Pages.map(page =>
                <li key={page} className={(page === currentPage) ? "page-item active" : "page-item"}>
                    <a style={{cursor:"pointer"}} className="page-link" onClick={()=> onPageChange(page)}>
                        {page}
                    </a>
                </li>
            )}
            </ul>
        </nav>
    )
}

export default Pagination