import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Modal } from '../Context/modal';
import { allCategories, getAllCategories } from '../../store/categories';
import LoginForm from '../auth/LoginForm';
import Profile from './Profile'
import SearchBar from '../Product/SearchBar';
import '../CSS/NavBar.css'
import cart from '../CSS/Images/cart.svg'
import shop from '../CSS/Images/shop.svg'

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
              <div className='navBar-home'>Happily</div>
            </NavLink>
          </div>
          <SearchBar />
          {user ? <>
            <div className='navBar-link-icon'>
              <NavLink to='/shop/products' exact={true} activeClassName='active'>
                <img src={shop} alt='shop'></img>
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
                  <LoginForm setShowSignIn={setShowSignIn} />
                </Modal>
              )}
            </div>
          </>}
          <div className='navBar-link-icon'>
            <NavLink to='/cart' exact={true} activeClassName='active'>
              <img src={cart} alt='cart'></img>
            </NavLink>
          </div>
        </div>
        <div className='navBar-featured-outer'>
          {categories.map((category, i) => {
            return (
              <NavLink to={`/featured/${category?.name.toLowerCase()}`} key={i}>
                <div className='navBar-feature'>
                  {category?.display_name}
                </div>
              </NavLink>
            )
          })}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
