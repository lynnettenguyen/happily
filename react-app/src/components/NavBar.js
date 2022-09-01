
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { allCategories, getAllCategories } from '../store/categories';
import cart from './CSS/Images/cart.svg'
import './CSS/NavBar.css'
import shop from './CSS/Images/shop.svg'

const NavBar = () => {
  const user = useSelector(state => state.session.user)
  const categories = useSelector(allCategories)
  const dispatch = useDispatch()

  useEffect(() => { dispatch(getAllCategories()) }, [])

  return (
    <nav>
      <div className='navBar-outer'>
        <div className='navBar-link'>
          <NavLink to='/' exact={true} activeClassName='active'>
            <div className='navBar-home'>Knotsy</div>
          </NavLink>
        </div>
        {user ? <>
          <div className='navBar-link'>
            <NavLink to='/shop' exact={true} activeClassName='active'>
              <img src={shop}></img>
            </NavLink>
          </div>
          <div className='navBar-link'>
            <NavLink to='/images' exact={true} activeClassName='active'>
              Images
            </NavLink>
          </div>
          <div className='navBar-link'>
            <LogoutButton />
          </div>
        </> : <>
          <div className='navBar-link'>
            <NavLink to='/sign-in' exact={true} activeClassName='active'>
              Sign In
            </NavLink>
          </div>
        </>}
        <div className='navBar-link'>
          <NavLink to='/cart' exact={true} activeClassName='active'>
            <img src={cart}></img>
          </NavLink>
        </div>
      </div>
      <div className='navBar-featured-outer'>
        {categories.map((category) => {
          return (
              <div className='navBar-feature'>
                <NavLink to={`/featured/${category.name.toLowerCase()}`}>
                  {category.display_name}
                </NavLink>
              </div>
          )
        })}
      </div>
    </nav>
  );
}

export default NavBar;
