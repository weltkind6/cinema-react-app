import React, {useEffect} from 'react';
import movieApi from "../../common/api/movieApi";
import {apiKey} from "../../common/api/movieApiKey";
import {useDispatch} from "react-redux";
import {addMovies} from "../../feauters/movies/movieSlice";
import MovieLists from "../MovieLists/MovieLists";

const Home = () => {

    const dispatch = useDispatch()
    const movieText = 'Harry'

    useEffect(() => {

        const fetchMovies = async () => {
            const response = await movieApi
                .get(`?apiKey=${apiKey}&s=${movieText}&type=movie`)
                .catch(err => console.log('Error!', err))
            dispatch(addMovies(response.data))
        }

        fetchMovies()

    }, [])

    return (
        <div className='banner-img'>
            <MovieLists/>
        </div>
    );
};

export default Home;