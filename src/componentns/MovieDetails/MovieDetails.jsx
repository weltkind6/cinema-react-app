import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchApiMoviesOrDetails,
    getSelectedMovieOrShow,
    removeSelectedMovieOrShow
} from "../../feauters/movies/movieSlice";
import './MovieDetails.scss'

const MovieDetails = () => {
    const {imdbID} = useParams()
    const dispatch = useDispatch()
    const data = useSelector(getSelectedMovieOrShow)

    useEffect(() => {
        dispatch(fetchApiMoviesOrDetails(imdbID))
        return () => {
            dispatch(removeSelectedMovieOrShow())
        }
    }, [dispatch, imdbID])

    return (
        <div>
            <h3>Movie details</h3>
            <div className="movie-section">
                {Object.keys(data).length === 0 ? <h2>Loading...</h2> : <>
                    <div className="section-left">
                        <div className="movie-title">
                            {data.Title}
                        </div>
                        <div className="movie-plot">
                            {data.Plot}
                        </div>
                        <div className="movie-year"><span>Year:</span> {data.Year}</div>
                        <div className="movie-actors"><span>Actors:</span>{data.Actors}</div>
                        <div className="movie-duration"><span>Runtime:</span>{data.Runtime}</div>
                        <div className='movie-BoxOffice'><span>BoxOffice:</span>{data.BoxOffice}</div>
                        <div className='movie-country'><span>Country:</span>{data.Country}</div>
                        <div className='movie-genre'><span>Gener:</span>{data.Genre}</div>
                    </div>
                    <div className="section-right">
                        <img src={data.Poster} alt={data.title}/>
                    </div>
                </>}

            </div>

        </div>
    );
};

export default MovieDetails;