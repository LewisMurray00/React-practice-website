import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    // Setting state for the 'click' hamburger function
    const [click, setClick] = useState(false);

    // Create a function for the click on the hamburger function and sets it to the opposite of what click is 
    const handleClick = () => setClick(!click);

  return (
    <>
     <nav className="navbar">
        <div className="navbar-container">
            {/* Link replaces the A tag (react-router)*/}
            <Link to="/" className="navbar-logo">
                JW Constructions
            </Link>
            
            {/* Div container for the hamburger responsive menu */}
            <div className="menu-icon" onClick={handleClick} >
                {/* creates a state where if clicked it will turn into the 'x' icon but any other case it will remain the hamburger icon */}
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
        </div>
     </nav>
        
    </>
  )
}

export default Navbar;
