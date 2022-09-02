import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { allCategories, getAllCategories } from '../../store/categories';
import cart from '../CSS/Images/cart.svg'
import '../CSS/NavBar.css'
import shop from '../CSS/Images/shop.svg'
import Profile from './Profile'
import magnifyingGlass from '../CSS/Images/magnifying_glass.svg'
import { Modal } from '../Context/modal';
import SignUpForm from '../auth/SignUpForm';

const NavBar = () => {
  const user = useSelector(state => state.session.user)
  const categories = useSelector(allCategories)
  const dispatch = useDispatch()

  const [showSignIn, setShowSignIn] = useState(false)

  useEffect(() => { dispatch(getAllCategories()) }, [])

  return (
    <nav>
      <div className='navBar-main'>
        <div className='navBar-outer'>
          <div className='navBar-link'>
            <NavLink to='/' exact={true} activeClassName='active'>
              <div className='navBar-home'>Knotsy</div>
            </NavLink>
          </div>
          <div className='navBar-searchBar-outer'>
            <input
              placeholder='Search for anything'
              className='searchBar-input'
            />
            <img src={magnifyingGlass} className='searchBar-glass' alt='search'></img>
          </div>
          {user ? <>
            <div className='navBar-link-icon'>
              <NavLink to='/shop' exact={true} activeClassName='active'>
                <img src={shop}></img>
              </NavLink>
            </div>
            <div className='navBar-link-profile'>
              <Profile user={user} />
            </div>
          </> : <>
            <div className='navBar-link sign-in'>
              <div onClick={() => setShowSignIn(true)}>
                Sign In
              </div>
              {showSignIn && (
                <Modal onClose={() => setShowSignIn(false)}>
                  <SignUpForm setShowSignIn={setShowSignIn} />
                </Modal>
              )}
            </div>
          </>}
          <div className='navBar-link-icon'>
            <NavLink to='/cart' exact={true} activeClassName='active'>
              <img src={cart}></img>
            </NavLink>
          </div>
        </div>
        <div className='navBar-featured-outer'>
          {categories.map((category, i) => {
            return (
              <div className='navBar-feature' key={i}>
                <NavLink to={`/featured/${category?.name.toLowerCase()}`}>
                  {category?.display_name}
                </NavLink>
              </div>
            )
          })}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
