import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './Header.scss'
import {useDispatch} from "react-redux";
import {fetchApiMovies, fetchApiShows} from "../../feauters/movies/movieSlice";
import {isAllOf} from "@reduxjs/toolkit";

const Header = () => {

    const [term, setTerm] = useState('')
    const dispatch = useDispatch()
    const submitHandler = e => {
        e.preventDefault()
        if(term === '') {
            return alert('Please enter the term!')
        }
        dispatch(fetchApiMovies(term))
        dispatch(fetchApiShows(term))
        setTerm('')
    }

    return (
        <div className='header'>
            <div className='logo'>
                <Link to='/'>Movie app</Link>
            </div>
            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        placeholder='Search movies/shows'
                        onChange={e => setTerm(e.target.value)}
                        value={term}
                    />
                    <button type='submit'>
                        <i className='fa fa-search'>
                            Find
                        </i></button>
                </form>
            </div>
            <div className="user-img">
                <img src="https://currentcapitalsecuritiesltd.com/images/customer1.png" alt="user"/>
            </div>
        </div>
    );
};

export default Header;