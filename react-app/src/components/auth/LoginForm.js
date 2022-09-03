import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import '../CSS/LoginForm.css'
import SignUpForm from './SignUpForm';

const LoginForm = ({ setShowSignIn }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const [showRegister, setShowRegister] = useState(false)

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      console.log(data)
      setErrors(data);
    }
  };

  console.log('SHOWREGISTER', showRegister)

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    setShowRegister(true)
  }

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      {showRegister ? <SignUpForm setShowSignIn={setShowSignIn} /> : <form onSubmit={onLogin} className='login-form-main'>
        <div className='login-upper'>
          <div className='login-header'>Sign in</div>
          <div className='login-register-button' onClick={() => handleRegister()}>Register</div>
        </div>
        <div className='login-field-outer'>
          <label className='login-label' htmlFor='email'>Email address *</label>
          <input
            name='email'
            className='login-input'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className='login-error-outer'>
          {errors?.map((error, ind) => {
            if (error.split(":")[0].toLowerCase() === 'email ')
              return (
                <div key={ind} className='login-errors'>*{error.split(":")[1]}</div>
              )
          })}
        </div>
        <div className='login-field-outer'>
          <label className='login-label' htmlFor='password'>Password *</label>
          <input
            name='password'
            className='login-input'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
        </div>
        <div className='login-error-outer'>
          {errors?.map((error, ind) => {
            if (error.split(":")[0].toLowerCase() === 'password ')
              return (
                <div key={ind} className='login-errors'>*{error.split(":")[1]}</div>
              )
          })}
        </div>
        <div className='login-buttons-outer'>
          <button type='submit' className='login-form-button'>Sign in</button>
          <button type='submit' className='login-form-demo-button' onClick={() => { setEmail('demo@aa.io'); setPassword('password') }}> Demo User</button>
        </div>
      </form >}
    </>
  );
};

export default LoginForm;
