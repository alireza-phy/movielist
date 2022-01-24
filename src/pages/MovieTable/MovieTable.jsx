import React from "react";
import './MovieTable.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Paginate, useEffect, useState} from '../../components'
import Table from "../../components/TableOfMovies/Table";
import Filters from "../../components/Filters/Filters";

const MovieTable = () => {

    const [movieList, setMovieList] = useState([])
    const [filter, setFilter] = useState("All")
    const [pageSize, setPageSize] = useState(4)
    const [currentPage, setCurrentPage] = useState(1)
    const [paginateList, setPaginateList] = useState(Paginate(filter, movieList, pageSize, currentPage))

    useEffect(() => {
        fetch('/api/movies')
            .then(response => response.json())
            .then(data => setMovieList(data.movies));
    }, [])

    useEffect(() => {
        setPaginateList(Paginate(filter, movieList, pageSize, currentPage));

    }, [currentPage, movieList]);


    return (
        <div>
            <div className='main_Container'>
                <Filters
                    setPaginateList={setPaginateList}
                    pageSize={pageSize}
                    movieList={movieList}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    filter={filter}
                    setFilter={setFilter}

                />
                <Table
                    setMovieList={setMovieList}
                    movieList={movieList}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    filter={filter}
                    paginateList={paginateList}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                />

            </div>
        </div>
    )
}

export default MovieTable