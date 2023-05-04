// import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy, createContext, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import SharedLayout from 'components/SharedLayout';
import PrivateRoute from 'routes/PrivateRoute';
// import RestrictedRoute from 'routes/RestrictedRoute';

const MainPage = lazy(() => import('../../pages/MainPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));

export const AuthContext = createContext(null);

export default function App() {
  const [userEmail, setUserEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [token, setToken] = useState(null);

  const userConfig = {
    userEmail,
    setUserEmail,
    isLoggedIn,
    setIsLoggedIn,
    isRefreshing,
    setIsRefreshing,
    token,
    setToken,
  };

  return (
    <AuthContext.Provider value={userConfig}>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          {/* <Route
            path="login"
            element={
              // <RestrictedRoute component={RegisterPage} redirectTo="/" />
            }
          /> */}
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route
            path="contacts"
            element={<PrivateRoute component={MainPage} redirectTo="/login" />}
          />
          {/* <Route path="*" element={<ArbCont />} /> */}
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
}
