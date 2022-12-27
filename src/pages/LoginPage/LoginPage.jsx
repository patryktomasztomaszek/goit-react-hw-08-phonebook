import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToken } from 'redux/tokenSlice';
import { addUser } from 'redux/userSlice';
import { useLoginMutation } from 'services/phonebookApi';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const credentials = { email, password };
    await login(credentials)
      .unwrap()
      .then(({ token, user: { email, name } }) => {
        localStorage.setItem('token', JSON.stringify(token));
        if (token) {
          dispatch(addUser({ email, name }));
        }
      })
      .catch(() => {
        alert('Data incorrect! Try again.');
      });

    const token = await JSON.parse(localStorage.getItem('token'));
    if (token === undefined) {
      return;
    }

    await dispatch(addToken(token));
    await navigate('/contacts');
    form.reset();
  };

  const { login_form } = styles;
  return (
    <>
      <form className={login_form} onSubmit={submitHandler}>
        <label>
          E-mail
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            required
          />
        </label>
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

export default LoginPage;
