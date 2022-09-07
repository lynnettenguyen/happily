import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link, useParams } from 'react-router-dom';
import magnifyingGlass from '../CSS/Images/magnifying_glass.svg'


const SearchBar = () => {

  return (
    <>
      <div className='navBar-searchBar-outer'>
        <input
          placeholder='Search for anything'
          className='searchBar-input'
        />
        <img src={magnifyingGlass} className='searchBar-glass' alt='search'></img>
      </div>
    </>
  )
}

export default SearchBar
