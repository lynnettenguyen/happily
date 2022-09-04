import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import '../CSS/Profile.css'
import downArrow from '../CSS/Images/down-arrow.svg'
import purchases from '../CSS/Images/purchases.svg'
import { logout } from '../../store/session';
import signOut from '../CSS/Images/sign-out.svg'
import star from '../CSS/Images/star.svg'
import shop from '../CSS/Images/shop.svg'

const Profile = ({ user }) => {
  const dispatch = useDispatch();
  const history = useHistory()
  const [showDropdown, setShowDropdown] = useState(false);

  const onLogout = async (e) => {
    await dispatch(logout());
  }

  return (
    <div className='navBar-profile-outer'>
      <div onClick={() => { setShowDropdown(!showDropdown) }} className='navBar-profile'>
        <img src={user.profile_pic} className='profile-user-img' alt='profile'></img>
        <img src={downArrow} className='profile-down-arrow-img' alt='profile'></img>
      </div>
      {showDropdown ?
        <>
          <span className="triangle-dropdown"></span>
          <div className='profile-dropdown'>
            <div className='dropdown-item-top'>
              <img src={user.profile_pic} className='profile-user-img' alt='profile'></img>
              <div className='profile-name'>{user.first_name}</div>
            </div>
            <Link to='/purchases'>
              <div className='dropdown-item'>
                <img src={purchases} className='profile-purchases-img' alt='purchases'></img>
                <div className='profile-purchase'>Purchases</div>
              </div>
            </Link>
            <Link to='/reviews'>
              <div className='dropdown-item'>
                <img src={star} className='review-star-img' alt='reviews'></img>
                <div className='profile-reviews'>Review your purchases</div>
              </div>
            </Link>
            <Link to='/shop'>
              <div className='dropdown-item'>
                <img src={shop} className='profile-shop-img' alt='shop'></img>
                <div className='profile-shop'>Sell on Knotsy</div>
              </div>
            </Link>
            <div className='dropdown-item'>
              <div onClick={onLogout} className='sign-out-outer'>
                <img src={signOut} className='sign-out-img' alt='signOut'></img>
                <div className='profile-purchase'>Sign out</div>
              </div>
            </div>
          </div>
        </>
        : <></>
      }
    </div >
  )

}
export default Profile;
