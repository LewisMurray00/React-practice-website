import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

//All CSS classes are stated here
const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    //Defaults the button to the first style in the array
   const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
   const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <Link to='/contact-us' className="btn-mobile">
        {/* backticks '`' allow the input of a variable name */}
          <button 
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
          >
              {children}
          </button>  
        </Link>
    )

}