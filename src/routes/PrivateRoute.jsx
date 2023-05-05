import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../components/App/App';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const { isLoggedIn, isRefreshing } = useContext(AuthContext);
  const shouldRedirect = !isRefreshing && !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
}
