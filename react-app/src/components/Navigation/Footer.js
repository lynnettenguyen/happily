import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Modal } from '../Context/modal';
import '../CSS/Footer.css'
import footerDisplay from '../CSS/Images/footer.svg'
import github from '../CSS/Images/github.png'
import linkedIn from '../CSS/Images/linkedIn.png'


const Footer = () => {
  return (
    <div className='footer-outer-main'>
      <div className='footer-upper'>
        <img src={footerDisplay} className='main-footer-img'></img>
      </div>
      <div className='footer-middle'></div>
      <div className='footer-lower'>
        <div className='socials-outer'>
          <div className='socials-inner'>
            <div><img src={linkedIn} className='social-logo-linked' alt=''></img></div>
            <div className='social-text'><a href='https://www.linkedin.com/in/lynnettenguyen/'>Lynnette Nguyen</a></div>
          </div>
          <div className='socials-inner'>
            <div><img src={github} className='social-logo-github' alt=''></img></div>
            <div className='social-text'><a href='https://github.com/lynnettenguyen/happily'>Github Repository</a></div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='footer-bottom-text'>
          <span>App Academy Capstone Project</span>
          <span>© 2022 Happily</span>
        </div>
      </div>
    </div >
  )
}

export default Footer
