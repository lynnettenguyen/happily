import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/session';
import SignUpForm from './SignUpForm';
import '../CSS/LoginForm.css'

const LoginForm = ({ setShowSignIn }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const [showRegister, setShowRegister] = useState(false)

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
      setShowSignIn(false)
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    setShowRegister(true)
  }

  return (
    <>
      {showRegister ? <SignUpForm setShowRegister={setShowRegister} setShowSignIn={setShowSignIn} /> : <form onSubmit={onLogin} className='login-form-main'>
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
            maxLength={255}
          />
        </div>
        <div className='login-error-outer'>
          {errors?.map((error, i) => {
            if (error.split(":")[0].toLowerCase() === 'email ')
              return (
                <div key={i} className='login-errors'>*{error.split(":")[1]}</div>
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
          {errors?.map((error, i) => {
            if (error.split(":")[0].toLowerCase() === 'password ')
              return (
                <div key={i} className='login-errors'>*{error.split(":")[1]}</div>
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
