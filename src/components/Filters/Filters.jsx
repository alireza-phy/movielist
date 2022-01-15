import React from "react";
import {Paginate} from "../index";

function Filters (
    {
        pageSize,
        setPaginateList,
        currentPage,
        setCurrentPage,
        movieList,
        filter,
        setFilter
    }) {

    const FilterList = ['All', 'Action', 'Drama', 'Adventure']
    let Classes = "list-group-item list-group-item-action"


    const handleFilter = (movieList, filterType) => {
        setFilter(filterType)
        setCurrentPage(1)
        setPaginateList(Paginate(filterType, movieList, pageSize, currentPage))

    }

    return (
        <div className={'list-group'} style={{margin: '60px'}}>
            {FilterList.map(filterItem =>
                (filterItem === 'All')
                    ? <div key={Math.random() * 100} style={{cursor: 'pointer'}}
                           className={(filterItem === filter) ? `${Classes} active` : Classes}
                           onClick={() => {
                               handleFilter(movieList, filterItem)
                           }}
                    >
                        {`${filterItem} genres`}
                    </div>

                    :
                    <div key={Math.random() * 100} style={{cursor: 'pointer'}}
                         className={(filterItem === filter) ? `${Classes} active` : Classes}
                         onClick={() => {
                             handleFilter(movieList, filterItem)
                         }}
                    >
                        {filterItem}
                    </div>
            )}
        </div>
    )

}

export default Filters