import React from 'react'
import _ from 'lodash'

export const Paginate = (filter , items , pageSize , currentPage) => {
let list = (filter === 'All') ? items : items.filter(item => item.genre === filter )
    const startIndex = (currentPage - 1) * pageSize ;
    return _(list).slice(startIndex).take(pageSize).value()
}