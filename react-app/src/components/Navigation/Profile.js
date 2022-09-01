import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import '../CSS/Profile.css'
import downArrow from '../CSS/Images/down-arrow.svg'
import purchases from '../CSS/Images/purchases.svg'

const Profile = ({ user }) => {
  const dispatch = useDispatch();
  const history = useHistory()
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <div onClick={() => { setShowDropdown(!showDropdown) }}>
        <img src={user.profile_pic} className='profile-user-img' alt='profile'></img>
        <img src={downArrow} className='profile-down-arrow-img' alt='profile'></img>
      </div>
      {showDropdown ?
        <div>
          <div>
            <img src={user.profile_pic} className='profile-user-img' alt='profile'></img>
            <div>{user.first_name}</div>
          </div>
          <div>
            <img src={purchases} className='profile-purchases-img' alt='purchases'></img>
            <div>Purchases</div>
          </div>
          <div className='dropdown-item'>
            <LogoutButton />
          </div>
        </div>
        : <></>}
    </>
  )

}
export default Profile;
