import React from 'react';
import {Link} from "react-router-dom";
import './Header.scss'

const Header = () => {
    return (
       <div className='header'>
           <Link to='/'>
               <div className="logo">Movie app</div>
           </Link>
           <div className="user-img">
               <img src="https://currentcapitalsecuritiesltd.com/images/customer1.png" alt="user"/>
           </div>
       </div>
    );
};

export default Header;