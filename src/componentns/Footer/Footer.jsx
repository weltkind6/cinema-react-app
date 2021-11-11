import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <Link to='/'>
                <h3>Linka in footer</h3>
            </Link>
        </div>
    );
};

export default Footer;