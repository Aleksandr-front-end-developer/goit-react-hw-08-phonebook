import { useSelector } from 'react-redux';
import { handleIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(handleIsLoggedIn);
  return !isLoggedIn ? children : <Navigate to="/contacts" />;
};

export default PublicRoute;
