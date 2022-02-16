import React from 'react';
import { Button } from '../Button/Button';
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
      <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Like our work?
            </p>
            <p className='footer-subscription-text'>
                Email us here!
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
                    <h2>Pages</h2>
                    <Link to='/'>Home</Link>
                    <Link to='our-work'>Our work</Link>
                    <Link to='reviews'>Reviews</Link>
                    <Link to='contact-us'>Contact us</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className='social-media-wrap'>
                <div className='social-icons'>
                    <Link to='/' target="_blank" aria-label="Facebook"  className='social-icon-link facebook'>
                        <i className="fab fa-facebook"/>
                    </Link>
                    <Link to='/' target="_blank" aria-label="Instagram"  className='social-icon-link facebook'>
                        <i className="fab fa-instagram"/>
                    </Link>
                    <Link to='/' target="_blank" aria-label="Whatsapp"  className='social-icon-link facebook'>
                        <i className="fab fa-whatsapp"/>
                    </Link>
                </div>
                <small className='website-rights'>JWConstructionLTD 2022</small>
            </div>
        </section>
      </div>

  );
}

export default Footer;
