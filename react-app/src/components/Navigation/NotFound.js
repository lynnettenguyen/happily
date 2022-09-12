import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/SearchBar.css'

const NotFound = () => {
  return (
    <div className='product-not-found-outer'>
      <div className='product-not-found-header'>404 Page Not Found</div>
      <div className='return-to-home-link'>
        <Link to="/" className='return-to-happily'><i class="fa-solid fa-arrow-left"></i></Link> &nbsp;Go back to Happily
      </div>
    </div>
  )
}

export default NotFound
