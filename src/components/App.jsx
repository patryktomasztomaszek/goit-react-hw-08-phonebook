// import Logout from './Logout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteToken } from '../redux/tokenSlice';
import { deleteUser } from 'redux/userSlice';
import { useLogoutMutation } from 'services/phonebookApi';
import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styles from './App.module.scss';

const App = () => {
  const token = useSelector(state => state.token);
  const user = useSelector(state => state.user);
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await localStorage.setItem('token', JSON.stringify(''));
    await logout().then(() => {
      dispatch(deleteToken());
      dispatch(deleteUser());
    });
    await navigate('/');
  };

  const { container } = styles;

  return (
    <main className={container}>
      <nav>
        <Link to="/">Home</Link>
        {!token && <Link to="/register">Register</Link>}
        {!token && <Link to="/login">Log in</Link>}
        {token && <Link to="/contacts">Contacts</Link>}
        {token && (
          <Link as="button" onClick={logoutHandler}>
            Log out
          </Link>
        )}
      </nav>
      {token && (
        <p>
          <span>User:</span> {user.email}
        </p>
      )}
      <Suspense fallback={<h2>Loading . . .</h2>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default App;
