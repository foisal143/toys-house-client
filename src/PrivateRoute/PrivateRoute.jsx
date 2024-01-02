import { useContext } from 'react';
import { AuthContext } from '../Authprovaider/Authprovaider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  if (loader) {
    return (
      <div className="text-center mt-12">
        <progress className="progress  w-56"></progress>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location} replace></Navigate>;
};

export default PrivateRoute;
