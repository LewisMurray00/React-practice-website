import React from 'react';
import { Button } from '../Button/Button';
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
      <div className='footer-container'>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Pages</h2>
                    <Link to='/'>Home</Link>
                    <Link to='our-work'>Our work</Link>
                    <Link to='reviews'>Reviews</Link>
                    <Link to='contact-us'>Contact us</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact us</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='our-work'>Support</Link>
                    <Link to='reviews'>Destinations</Link>
                    <Link to='contact-us'>Sponsorships</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className='social-media-wrap'>
                <small className='website-rights'>JWConstructionLTD 2022</small>
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
                
            </div>
        </section>
      </div>

  );
}

export default Footer;
