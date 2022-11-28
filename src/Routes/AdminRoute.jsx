import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserAuth } from '../Auth/AuthContext';
import useAdmin from '../Hooks/useAdmin';
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
const AdminRoute = ({children}) => {
        const { user, loading } = useContext(UserAuth);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return (
          <Container className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Container>
        );
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;