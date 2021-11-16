import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieApi";
import {apiKey} from "../../common/api/movieApiKey";

export const fetchApiMovies = createAsyncThunk('movies/fetchApiMovies', async (term) => {

    const response = await movieApi
        .get(`?apiKey=${apiKey}&s=${term}&type=movie`)
    return response.data
})

export const fetchApiShows = createAsyncThunk('shows/fetchApiMovies', async (term) => {

    const response = await movieApi
        .get(`?apiKey=${apiKey}&s=${term}&type=series`)
    return response.data
})

export const fetchApiMoviesOrDetails = createAsyncThunk('movies/fetchApiMoviesOrDetails', async (id) => {
    const response = await movieApi
        .get(`?apiKey=${apiKey}&i=${id}&Plot=full`)
    return response.data
})


const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {}
}


const movieSlice = createSlice({
    name: 'movies', // reducer name
    initialState,
    reducers: {
        addMovies: (state, {payload}) => { //actionCreator
            state.movies = payload
        },
        removeSelectedMovieOrShow: state => {
            state.selectedMovieOrShow = {}
        },
    },
    extraReducers: {
        [fetchApiMovies.pending]: () => {
            console.log('Pending...')
        },
        [fetchApiMovies.fulfilled]: (state, {payload}) => {
            console.log('Fetched!')
            return {...state, movies: payload}
        },
        [fetchApiShows.fulfilled]: (state, {payload}) => {
            console.log('Shows!')
            return {...state, shows: payload}
        },
        [fetchApiMoviesOrDetails.fulfilled]: (state, {payload}) => {
            console.log('You see the details!')
            return {...state, selectedMovieOrShow: payload}
        },
        [fetchApiMovies.rejected]: () => {
            console.log('Rejected!')
        }
    }
})

export const {removeSelectedMovieOrShow} = movieSlice.actions
export default movieSlice.reducer
export const getAllMovies = state => state.movies.movies
export const getAllShows = state => state.movies.shows
export const getSelectedMovieOrShow = state => state.movies.selectedMovieOrShow
