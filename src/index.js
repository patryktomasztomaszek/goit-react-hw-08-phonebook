import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from 'components/App';

const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = React.lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const LoginPage = React.lazy(() => import('pages/LoginPage/LoginPage'));
const Contacts = React.lazy(() => import('pages/ContactsPage/ContactsPage'));
const PrivateRoute = React.lazy(() => import('components/PrivateRoute'));
const PublicRoute = React.lazy(() => import('components/PublicRoute'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route element={<PublicRoute />}>
              <Route path="register" element={<RegistrationPage />} />
              <Route path="login" element={<LoginPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="contacts" element={<Contacts />} />
            </Route>
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
