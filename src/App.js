import './App.scss';
import React from "react";
import Header from "./componentns/Header/Header";
import Footer from "./componentns/Footer/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./componentns/Home/Home";
import MovieDetails from "./componentns/MovieDetails/MovieDetails";


function App() {
    return (
        <Router>
            <div className="app">
                <Header/>
                <Routes>
                    <Route path='/' exact element={<Home/>}/>
                    <Route path='/movie/:imdbID' element={<MovieDetails/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
