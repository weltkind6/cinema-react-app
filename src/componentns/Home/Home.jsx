import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import MovieLists from "../MovieLists/MovieLists";
import {fetchApiMovies, fetchApiShows} from "../../feauters/movies/movieSlice";

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchApiMovies())
        dispatch(fetchApiShows())
    }, [dispatch])

    return (
        <div className='banner-img'>
            <MovieLists/>
        </div>
    );
};

export default Home;