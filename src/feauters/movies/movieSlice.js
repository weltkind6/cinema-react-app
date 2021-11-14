import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies: {}
}

const movieSlice = createSlice({
    name: 'movies', // reducer name
    initialState,
    reducers: {
        addMovies: (state, {payload}) => { //actionCreator
            state.movies = payload
        }
    }
})

export const {addMovies} = movieSlice.actions
export default movieSlice.reducer
export const getAllMovies = state => state.movies.movies