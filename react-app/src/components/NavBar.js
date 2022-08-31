
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import cart from './CSS/Images/cart.svg'
import './CSS/NavBar.css'
import shop from './CSS/Images/shop.svg'

const NavBar = () => {
  const user = useSelector(state => state.session.user)

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
    </nav>
  );
}

export default NavBar;
