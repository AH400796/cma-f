import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy, createContext, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { getCurrentUser } from '../../services/API';
import Loader from '../Loader';
import SharedLayout from 'components/SharedLayout';
import PrivateRoute from 'routes/PrivateRoute';
import RestrictedRoute from 'routes/RestrictedRoute';

import { LoaderWrapper } from './App.styled';

const MainPage = lazy(() => import('../../pages/MainPage'));
const ArbPage = lazy(() => import('../../pages/ArbPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));

export const AuthContext = createContext(null);

const lsIsLoggedIn = localStorage.getItem('loggedin') || false;
const lsToken = localStorage.getItem('token') || null;

export default function App() {
  const [verify, setVerify] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(() => lsIsLoggedIn);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [token, setToken] = useState(() => lsToken);

  useEffect(() => {
    setIsRefreshing(true);
    if (token === null) {
      setUserEmail('');

      setIsLoggedIn(false);
      localStorage.removeItem('loggedin');
      setIsRefreshing(false);
      return;
    }
    getCurrentUser(token)
      .then(res => {
        setUserEmail(res.data.email);
        // setIsLoggedIn(true);
      })
      .catch(error => console.log(error))
      .finally(setIsRefreshing(false));
  }, [token]);

  const userConfig = {
    verify,
    setVerify,
    userEmail,
    setUserEmail,
    isLoggedIn,
    setIsLoggedIn,
    isRefreshing,
    setIsRefreshing,
    token,
    setToken,
  };

  return isRefreshing ? (
    <LoaderWrapper>
      <Loader
        type={'spinningBubbles'}
        color={'#ff7b3eb2'}
        height={150}
        width={150}
      />
    </LoaderWrapper>
  ) : (
    <AuthContext.Provider value={userConfig}>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route
            path="login"
            element={<RestrictedRoute component={LoginPage} />}
          />
          <Route
            path="register"
            element={<RestrictedRoute component={RegisterPage} />}
          />
          <Route
            path="arbitrages"
            element={<PrivateRoute component={ArbPage} />}
          />
          <Route path="*" element={<MainPage />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
}
