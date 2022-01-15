import React, {useState} from "react";
import './MoviePage.css'
import {useParams} from "react-router-dom";
import {useEffect} from "react";

const MoviePage = () => {
    const params = useParams()
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        fetch(`/api/movies/${params.id}`)
            .then(response => response.json())
            .then(data => setMovieList(data.movie));
    }, [])

    return (
        <div className='body'>
            <div className='Container'>
                <div className='description_Card'>
                    <p className='description'>{movieList.description}</p>
                </div>
                <div className='Card'>
                    <img src={movieList.image} alt={`${movieList.title}`}/>
                    <div className='Content'>
                        <h1>#{movieList.id}</h1>
                        <h2>{movieList.title}</h2>
                        <p>director: {movieList.Director}</p>
                        <p>genre: {movieList.genre}</p>
                        <p>Imdb Rate: {movieList.ImdbRate}</p>
                        <p>publish Date: {movieList.publishDate}</p>
                    </div>
                </div>
                <a href='/Table'>
                    Back >> </a>

            < /div>
        </div>
    )
}

export default MoviePage