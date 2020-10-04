  
import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/adventure-reac/sign-up'>How it works</Link>
            <Link to='/adventure-reac/'>Testimonials</Link>
            <Link to='/adventure-reac/'>Careers</Link>
            <Link to='/adventure-reac/'>Investors</Link>
            <Link to='/adventure-reac/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/adventure-reac/'>Contact</Link>
            <Link to='/adventure-reac/'>Support</Link>
            <Link to='/adventure-reac/'>Destinations</Link>
            <Link to='/adventure-reac/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/adventure-reac/'>Submit Video</Link>
            <Link to='/adventure-reac/'>Ambassadors</Link>
            <Link to='/adventure-reac/'>Agency</Link>
            <Link to='/adventure-reac/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/adventure-reac/'>Instagram</Link>
            <Link to='/adventure-reac/'>Facebook</Link>
            <Link to='/adventure-reac/'>Youtube</Link>
            <Link to='/adventure-reac/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/adventure-reac/' className='social-logo'>
              RHS
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>RHS © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/adventure-reac/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/adventure-reac/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/adventure-reac/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/adventure-reac/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/adventure-reac/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;