import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import '../CSS/LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onLogin} className='login-form-main'>
      <div className='login-upper'>
        <div className='login-header'>Sign in</div>
        <button className='login-register-button'>Register</button>
      </div>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className='login-field-outer'>
        <label className='login-label' htmlFor='email'>Email address</label>
        <input
          name='email'
          className='login-input'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div className='login-field-outer'>
        <label className='login-label'  htmlFor='password'>Password</label>
        <input
          name='password'
          className='login-input'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        <button type='submit' className='login-form-button'>Sign in</button>
      </div>
    </form>
  );
};

export default LoginForm;
