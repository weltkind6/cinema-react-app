import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieApi";
import {apiKey} from "../../common/api/movieApiKey";

export const fetchApiMovies = createAsyncThunk('movies/fetchApiMovies', async () => {
    const movieText = 'Harry'
    const response = await movieApi
        .get(`?apiKey=${apiKey}&s=${movieText}&type=movie`)
    return response.data
})

export const fetchApiShows = createAsyncThunk('shows/fetchApiMovies', async () => {
    const showText = 'Friends'
    const response = await movieApi
        .get(`?apiKey=${apiKey}&s=${showText}&type=series`)
    return response.data
})


const initialState = {
    movies: {},
    shows: {}
}

const movieSlice = createSlice({
    name: 'movies', // reducer name
    initialState,
    reducers: {
        addMovies: (state, {payload}) => { //actionCreator
            state.movies = payload
        }
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
        [fetchApiMovies.rejected]: () => {
            console.log('Rejected!')

        }
    }
})

export const {addMovies} = movieSlice.actions
export default movieSlice.reducer
export const getAllMovies = state => state.movies.movies
export const getAllShows = state => state.movies.shows