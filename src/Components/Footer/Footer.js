import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
      <div className='footer-container'>
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
