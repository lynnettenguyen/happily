import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../CSS/Profile.css'
import downArrow from '../CSS/Images/down-arrow.svg'
import purchases from '../CSS/Images/purchases.svg'
import { logout } from '../../store/session';
import signOut from '../CSS/Images/sign-out.svg'
import shop from '../CSS/Images/shop.svg'

const Profile = ({ user, setSelectedCategory }) => {
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

  const onLogout = () => {
    dispatch(logout());
  }

  const openMenu = () => {
    if (showDropdown) return;
    setShowDropdown(true);
  };

  useEffect(() => {
    if (!showDropdown) return;

    const closeMenu = () => {
      setShowDropdown(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showDropdown]);

  return (
    <div className='navBar-profile-outer'>
      <div onClick={openMenu} className='navBar-profile'>
        <img src={user?.profile_pic} className='profile-user-img' alt='profile'></img>
        <img src={downArrow} className='profile-down-arrow-img' alt='profile'></img>
      </div>
      {showDropdown ?
        <>
          <span className="triangle-dropdown"></span>
          <div className='profile-dropdown'>
            <div className='dropdown-item-top'>
              <img src={user?.profile_pic} className='profile-user-img' alt='profile'></img>
              <div className='profile-name'>{user.first_name}</div>
            </div>
            <Link to='/purchases'>
              <div className='dropdown-item' onClick={() => { setShowDropdown(!showDropdown); setSelectedCategory() }}>
                <img src={purchases} className='profile-purchases-img' alt='purchases'></img>
                <div className='profile-purchase'>Purchases and reviews</div>
              </div>
            </Link>
            <Link to='/shop'>
              <div className='dropdown-item' onClick={() => { setShowDropdown(!showDropdown); setSelectedCategory() }}>
                <img src={shop} className='profile-shop-img' alt='shop'></img>
                <div className='profile-shop'>Sell on Happily</div>
              </div>
            </Link>
            <div className='dropdown-item'>
              <div onClick={onLogout} className='sign-out-outer'>
                <img src={signOut} className='sign-out-img' alt='signOut'></img>
                <div className='profile-purchase'>Sign out</div>
              </div>
            </div>
          </div>
        </> : <></>
      }
    </div >
  )

}
export default Profile;
