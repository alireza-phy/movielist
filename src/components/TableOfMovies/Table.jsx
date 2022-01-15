import React from "react";
import {Link} from "react-router-dom";
import {LikeIcon, Pagination} from "../index";


function Table(
    {
        setMovieList,
        movieList,
        setCurrentPage,
        currentPage,
        filter,
        paginateList,
        pageSize,
        setPageSize
    }) {

    const handleDelete = id => {
        setMovieList(movieList.filter(item => item.id !== id))
    }

    const handlePageChange = page => {
        setCurrentPage(page)
    }

    let count = (filter === 'All') ? movieList.length : movieList.filter(item => item.genre === filter).length;

    return (
        <div className={'movieTable'}>
            {(count === 0) ? <h3> there are no movies in the list </h3> :
                <h3> There are {count} movies in the list. </h3>}
            <table className='table'>
                <thead>
                <tr>
                    <th scope="col"> Imdb Rank</th>
                    <th scope="col"> Title</th>
                    <th className={"text-center"} scope="col"> Genre</th>
                    <th className={"text-center"} scope="col"> Imdb Rate</th>
                    <th className={"text-center"} scope="col"> </th>
                    <th className={"text-center"} scope="col"> </th>
                </tr>
                </thead>
                <tbody>
                {paginateList.map(movie =>
                    <tr key={movie.id}>
                        <td> {movie.id} </td>
                        <td><Link to={`/MoviePage/${movie.id}`}>  {movie.title} </Link></td>
                        <td className={"text-center"}> {movie.genre.name} </td>
                        <td className={"text-center"}> {movie.ImdbRate} </td>
                        <td className={"text-center"}><LikeIcon movie={movie} movieList={movieList}
                                                                setMovieList={setMovieList}/></td>
                        <td className={"text-center"}>
                            <button type="button" className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(movie.id)}>delete
                            </button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            <Pagination
                count={count}
                pageSize={pageSize}
                currentPage={currentPage}
                setPageSize={setPageSize}
                onPageChange={handlePageChange}
            />
        </div>
    )

}

export default Table