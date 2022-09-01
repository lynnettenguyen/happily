import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import signOut from '../CSS/Images/sign-out.svg'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (
    <button onClick={onLogout} className='sign-out-button'>
      <img src={signOut} className='sign-out-img' alt='signOut'></img>
      Sign out
    </button>
  );
};

export default LogoutButton;
