import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Navbar.css'

function Navbar() {


    // Setting state for the 'click' hamburger function
    const [click, setClick] = useState(false);
    
    // Create a function for the click on the hamburger function and sets it to the opposite of what the click state is 
    const handleClick = () => setClick(!click);
    
    // Creating a function that closes the hamburger menu on click after a tab has been selected
    const closeMobileMenu = () => setClick(false);


    // Setting state for the button
    const [button, setButton] = useState(true);

    //Creates a function that removes the button and displays it depending on screen size
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else{
            setButton(true)
        }
    };

    //Removes the button that is supposed to be hidden on smaller screens that appears upon screen refresh
    useEffect(()=>{
        showButton();
    }, []);

    //Invokes the button
    window.addEventListener('resize', showButton);


  return (
    <>
     <nav className="navbar">
        <div className="navbar-container">
            {/* Link replaces the A tag (react-router)*/}
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                JW Constructions
            </Link>
            
            {/* Div container for the hamburger responsive menu */}
            <div className="menu-icon" onClick={handleClick} >
                {/* creates a state where if clicked it will turn into the 'x' icon but any other case it will remain the hamburger icon */}
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                   <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                       Home
                   </Link>
                </li>
                <li className='nav-item'>
                   <Link to='/our-work' className='nav-links' onClick={closeMobileMenu}>
                       Our Work
                   </Link>
                </li>
                <li className='nav-item'>
                   <Link to='/reviews' className='nav-links' onClick={closeMobileMenu}>
                       Reviews
                   </Link>
                </li>
                <li className='nav-item'>
                    <div className="contact-us-navbar">
                    <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                       Contact us 
                   </Link>  
                    </div>

                </li>
            </ul>
            {/*  */}
            {button && <Button buttonStyle='btn--outline'>Contact Us</Button>}
        </div>
     </nav>
        
    </>
  )
}

export default Navbar;
