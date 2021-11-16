import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import MovieLists from "../MovieLists/MovieLists";
import {fetchApiMovies, fetchApiShows} from "../../feauters/movies/movieSlice";

const Home = () => {

    const dispatch = useDispatch()
    const movies = 'Harry'
    const shows = 'Friends'

        useEffect
    (() => {
        dispatch(fetchApiMovies(movies))
        dispatch(fetchApiShows(shows))
    }, [dispatch])

    return (
        <div className='banner-img'>
            <MovieLists/>
        </div>
    );
};

export default Home;