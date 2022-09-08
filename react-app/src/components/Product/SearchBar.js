import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link, useParams } from 'react-router-dom';
import { findProductsBySearch } from '../../store/products';
import magnifyingGlass from '../CSS/Images/magnifying_glass.svg'
import '../CSS/SearchBar.css'

const SearchBar = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [keyword, setKeyword] = useState("")

  const handleSearch = async (e) => {
    e.preventDefault()

    const response = await dispatch(findProductsBySearch(keyword))
    if (response) {
      history.push(`/search/${keyword}`)
    }

    setKeyword("")
  }

  return (
    // <div className='searchBar-main'>
    <div className='navBar-searchBar-outer'>
      <form onSubmit={handleSearch} className="searchBar-form">
        <input
          placeholder='Search for anything'
          className='searchBar-input'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          maxLength="50"
        />
        <button type='submit' className='searchBar-button'><img src={magnifyingGlass} className='searchBar-glass' alt='search'></img></button>
      </form>
    </div>
    // </div>
  )
}

export default SearchBar
