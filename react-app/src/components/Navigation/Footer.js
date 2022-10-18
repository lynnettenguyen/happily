import React from 'react';
import '../CSS/Footer.css'
import footerDisplay from '../CSS/Images/footer.svg'
import github from '../CSS/Images/git.png'
import linkedIn from '../CSS/Images/linkedIn.png'
import angelList from '../CSS/Images/angelList.png'
import portfolio from '../CSS/Images/portfolio.png'

const Footer = () => {
  return (
    <div className='footer-outer-main'>
      <div className='footer-upper'>
        <img src={footerDisplay} className='main-footer-img' alt=''></img>
      </div>
      <div className='footer-middle'></div>
      <div className='footer-lower'>
        <div className='socials-outer'>
          <div className='footer-middle-left'>
            <div className='footer-happily-header'>© 2022 Happily</div>
            <div className='footer-happily-description'>An e-commerce site for all things wedding; for demonstration purposes only.</div>
          </div>
          <div className='footer-middle-right'>
            <div className='socials-inner'>
              <div><img src={github} className='social-logo' alt=''></img></div>
              <div className='social-text'><a href='https://github.com/lynnettenguyen/happily' target="_blank">Github</a></div>
            </div>
            <div className='socials-inner'>
              <div><img src={linkedIn} className='social-logo' alt=''></img></div>
              <div className='social-text'><a href='https://www.linkedin.com/in/lynnettenguyen/' target="_blank">LinkedIn</a></div>
            </div>
            <div className='socials-inner'>
              <div><img src={angelList} className='social-logo' alt=''></img></div>
              <div className='social-text'><a href='https://angel.co/u/lynnette-nguyen-1' target="_blank">AngelList</a></div>
            </div>
            <div className='socials-inner'>
              <div><img src={portfolio} className='social-logo' alt=''></img></div>
              <div className='social-text'><a href='https://lynnettenguyen.github.io/' target="_blank">Portfolio</a></div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Footer
