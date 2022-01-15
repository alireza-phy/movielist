// import React, {Component, useState} from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import movies from "../MoviesData/MoviesData";


const LikeIcon = ({movie , setMovieList , movieList}) => {
    let likeFill = "bi-heart";
    ((movie.liked) ? likeFill += "-fill" : likeFill = "bi-heart" );

    const handleLike = () => {
        setMovieList(movieList.map(item => (item.id === movie.id) ? {...item , liked: !movie.liked } : item))
            }

    return (
        <div>
            <i className={`bi ${likeFill}`}
               style={{cursor:'pointer'}}
               onClick={()=> handleLike()}
            >
            </i>
        </div>
    )
}

// const Like = ({movie , setMovieList , movieList}) => {
//     const handleLike = (movie) => {
//         setMovieList(movieList.map(item =>(item.id === movie.id) ? {...item , liked:!item.liked} : item));
//     }
//
//     return (
//         <div>
//             {(movie.liked) ? <i className={'bi bi-heart-fill'} onClick={()=>handleLike(movie)}></i> : <i className={'bi bi-heart'} onClick={()=>handleLike(movie)}></i>}
//         </div>
//     )
// }

export default LikeIcon