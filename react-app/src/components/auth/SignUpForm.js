import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../../store/session';
import '../CSS/SignUpForm.css'

const SignUpForm = ({ setShowRegister, setShowSignIn }) => {
  const [errors, setErrors] = useState([]);
  const user = useSelector(state => state.session.user)
  const [first_name, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(first_name, email, password));
      if (data) {
        setErrors(data)
      } else {
        setShowSignIn(false)
        setShowRegister(false)
      }
    } else {
      setErrors(['Password : Passwords do not match'])
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

  return (
    <form onSubmit={onSignUp} className='signup-form-main'>
      <div className='signup-upper'>
        <div className='signup-header'>Create your account</div>
        <div className='signup-caption'>Registration is easy.</div>
      </div>
      <div className='signup-field-outer'>
        <label className='signup-label'>Email address *</label>
        <input
          type='text'
          className='signup-input'
          name='email'
          onChange={updateEmail}
          value={email}
          maxLength={255}
        ></input>
      </div>
      {errors && <div className='signup-error-outer'>
        {errors?.map((error, ind) => {
          if (error.split(":")[0].toLowerCase() === 'email ')
            return (
              <div key={ind} className='signup-errors'>*{error.split(":")[1]}</div>
            )
        })}
      </div>}
      <div className='signup-field-outer'>
        <label className='signup-label'>First name *</label>
        <input
          type='text'
          className='signup-input'
          name='firstName'
          onChange={updateFirstName}
          value={first_name}
          maxLength="30"
        ></input>
      </div>
      {errors && <div className='login-error-outer'>
        {errors?.map((error, ind) => {
          if (error?.split(":")[0].toLowerCase() === 'first name ')
            return (
              <div key={ind} className='login-errors'>*{error.split(":")[1]}</div>
            )
        })}
      </div>}
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
        <div className='login-error-outer'>
          {errors.map((error, ind) => {
            if (error.split(":")[0].toLowerCase() === 'password ')
              return (
                <div key={ind} className='login-errors'>*{error.split(":")[1]}</div>
              )
          })}
        </div>
        <div className='signIn-account-message'>Already have an account? <span onClick={() => setShowRegister(false)} className='signIn-from-register'>Sign in</span></div>
      </div>
      <div className='signup-buttons-outer'>
        <button type='submit' className='signup-form-button'>Register</button>
      </div>
    </form>
  );
};

export default SignUpForm;
