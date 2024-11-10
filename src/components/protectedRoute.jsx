import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
    const token = sessionStorage.getItem('token');
    return !!token;  
};

const ProtectedRoute = () => {
    const isAuth = useAuth();

    if (!isAuth) {
        return <Navigate to="/login" />;
    }

    return <Outlet />; 
};

export default ProtectedRoute;
