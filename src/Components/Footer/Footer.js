import React from 'react';
import { Button } from '../Button/Button';
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
      <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Subscribe to see our work!
            </p>
            <p className='footer-subscription-text'>
                You can unsubscribe at any time
            </p>
            <div className='input-areas'>
                <form>
                    <input type="email" name="email" placeholder="Your Email" className='footer-input'/>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <Link to='/'>Home</Link>
                    <Link to='our-work'>Our work</Link>
                    <Link to='reviews'>Reviews</Link>
                    <Link to='contact-us'>Contact us</Link>
                </div>
            </div>
        </div>
      </div>

  );
}

export default Footer;
