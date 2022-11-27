import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserAuth } from '../Auth/AuthContext';
import Spinner from '../Global/Spinner';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({children}) => {
        const { user, loading } = useContext(UserAuth);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <h1 className='text-center'>Loading</h1>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;