import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
     <nav className="navbar">
        <div className="navbar-container">
            {/* Link replaces the A tag (react-router)*/}
            <Link to="/" className="navbar-logo">
                JW Constructions
            </Link>
        </div>
     </nav>
        
    </>
  )
}

export default Navbar;
