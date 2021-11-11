import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <Link to='/'>
                <h3>Linka in home</h3>
            </Link>
        </div>
    );
};

export default Home;