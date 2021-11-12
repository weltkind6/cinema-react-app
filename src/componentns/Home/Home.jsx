import React, {useEffect} from 'react';
import MovieListening from "../MovieDetails/MovieListening";
import movieApi from "../../common/api/movieApi";
import {apiKey} from "../../common/api/movieApiKey";

const Home = () => {

    useEffect(() => {
        const movieText = 'Harry'
        const fetchMovies = async () => {
            const response = await movieApi.get(`?apiKey=${apiKey}&s=${movieText}&type=movie`)
            console.log(response)
        }
        fetchMovies().catch(err => console.log('Error!', err))
    }, [])

    return (
        <div className='banner-img'>
            <MovieListening/>
        </div>
    );
};

export default Home;