import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
    const token = localStorage.getItem('token');
    return !!token;  
};

const ProtectedRoute = () => {
    const isAuth = useAuth();

    if (!isAuth) {
        return <Navigate to="/Login" />;
    }

    return <Outlet />; 
};

export default ProtectedRoute;
