import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../components/App/App';

export default function RestrictedRoute({
  component: Component,
  redirectTo = '/',
}) {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
}
