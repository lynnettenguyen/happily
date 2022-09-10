import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { findProductsBySearch } from '../../store/products';
import magnifyingGlass from '../CSS/Images/magnifying_glass.svg'
import '../CSS/SearchBar.css'

const SearchBar = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [keyword, setKeyword] = useState("")
  const [errors, setErrors] = useState([])

  useEffect(() => {
    if (keyword && keyword.trim().length >= 1) {
      setErrors([])
    }
  }, [keyword])

  const handleSearch = async (e) => {
    e.preventDefault()

    if (keyword.length === 0 || keyword.trim().length === 0) {
      setErrors(['Search keywords must include at least one character'])
      return
    }

    const response = await dispatch(findProductsBySearch(keyword))
    if (response) {
      history.push(`/search/${keyword}`)
    }

    setKeyword("")
    setErrors([])
  }


  return (
    <div className='searchBar-main'>
      <div>
        {errors?.map((error, i) => {
            return (
              <div key={i} className='search-errors'>{error}</div>
            )
          })}
      </div>
      <div className='navBar-searchBar-outer'>
        <form onSubmit={handleSearch} className="searchBar-form">
          <input
            placeholder='Search for anything'
            className='searchBar-input'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            maxLength="140"
          />
          <button type='submit' className='searchBar-button'><img src={magnifyingGlass} className='searchBar-glass' alt='search'></img></button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar
