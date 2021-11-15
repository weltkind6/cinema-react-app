import React from 'react';
import {useSelector} from "react-redux";
import {getAllMovies, getAllShows} from "../../feauters/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import './MovieLists.scss'

const MovieLists = () => {

    const movies = useSelector(getAllMovies)
    const shows = useSelector(getAllShows)

    const renderList =
        movies.Response === 'True' ?
            movies.Search.map((movie, index) => <MovieCard key={index} data={movie}/>)
            :
            (<div className='movies-error'><h3>{movies.Error}</h3></div>)
    const showsList =
        shows.Response === 'True' ?
            shows.Search.map((movie, index) => <MovieCard key={index} data={movie}/>)
            :
            (<div className='movies-error'><h3>{shows.Error}</h3></div>)



    return (
        <div className='movie-wrapper'>
            <div className="movie-list">
                <h2>Movies</h2>
                <div className='movie-container'>
                    {renderList}
                </div>
            </div>
            <div className="shows-list">
                <h2>Shows</h2>
                <div className='movie-container'>
                    {showsList}
                </div>
            </div>
        </div>
    );
};

export default MovieLists;