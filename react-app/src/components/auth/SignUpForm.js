import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import '../CSS/SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [first_name, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(first_name, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp} className='signup-form-main'>
      <div className='signup-upper'>
        <div className='signup-header'>Create your account</div>
        <div className='signup-caption'>Registration is easy.</div>
      </div>
      <div className='signup-error-outer'>
        {errors.map((error, ind) => (
          <div key={ind} className='signup-errors'>{error}</div>
        ))}
      </div>
      <div className='signup-field-outer'>
        <label className='signup-label'>Email address *</label>
        <input
          type='text'
          className='signup-input'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div className='signup-field-outer'>
        <label className='signup-label'>First name *</label>
        <input
          type='text'
          className='signup-input'
          name='firstName'
          onChange={updateFirstName}
          value={first_name}
        ></input>
      </div>
      <div>
      </div>
      <div className='signup-field-outer'>
        <label className='signup-label'>Password *</label>
        <input
          type='password'
          className='signup-input'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <div className='signup-field-outer'>
          <label className='signup-label'>Repeat password *</label>
          <input
            type='password'
            className='signup-input'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
      </div>
      <div className='signup-buttons-outer'>
        <button type='submit' className='signup-form-button'>Register</button>
      </div>
    </form>
  );
};

export default SignUpForm;
