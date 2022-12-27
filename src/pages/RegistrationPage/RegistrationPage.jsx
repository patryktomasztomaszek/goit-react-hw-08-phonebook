import React from 'react';
import { useSignupMutation } from 'services/phonebookApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from 'redux/userSlice';
import { addToken } from 'redux/tokenSlice';
import styles from './RegistrationPage.module.scss';

const RegistrationPage = () => {
  const [signup] = useSignupMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async e => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const name = `${firstName} ${lastName}`;
    const email = form.email.value;
    const password = form.password.value;
    const passwordConfirm = form.passwordConfirm.value;

    if (password !== passwordConfirm) {
      return alert('Password and password confirmation do not match!');
    }

    const credentials = { name, email, password };
    await signup(credentials)
      .unwrap()
      .then(({ token, user: { email, name } }) => {
        localStorage.setItem('token', JSON.stringify(token));
        if (token) {
          dispatch(addUser({ email, name }));
        }
      })
      .catch(() => {
        alert('User with this email address already exists!');
      });

    const token = await JSON.parse(localStorage.getItem('token'));
    if (token === undefined) {
      return;
    }

    await dispatch(addToken(token));
    await navigate('/contacts');
    form.reset();
  };

  const { registration_form } = styles;
  return (
    <>
      <form className={registration_form} onSubmit={submitHandler}>
        <label>
          First name
          <input type="text" name="firstName" required />
        </label>
        <label>
          Last name
          <input type="text" name="lastName" required />
        </label>
        <label>
          E-mail
          <input
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            autoComplete="email"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one uppercase and lowercase letter, one number and at least 8 or more characters"
            autoComplete="new-password"
            required
          />
        </label>
        <label>
          Confirm password
          <input
            type="password"
            name="passwordConfirm"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one uppercase and lowercase letter, one number and at least 8 or more characters"
            autoComplete="new-password-confirm"
            required
          />
        </label>
        <button type="submit">Register account</button>
      </form>
    </>
  );
};

export default RegistrationPage;
