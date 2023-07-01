import React, {ComponentType, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useLocation} from "react-router";

interface WithAuthorizationProps {
    // Add any props that your wrapped component requires
}

const withAuthorization = <P extends object>(
    WrappedComponent: ComponentType<P>
): (props: (P & WithAuthorizationProps)) => any => (props: P & WithAuthorizationProps) => {
    const navigate = useNavigate();
    const location = useLocation()


    const checkUserAuthentication = () => {
        const userToken = localStorage.getItem('userToken')
        const user = localStorage.getItem('user')

        if (!user || !userToken) {
            if (location.pathname === '/admin-panel' || location.pathname === '/admin-dashboard'
                || location.pathname === '/register' || location.pathname === '/housePosting') {
                return false
            }
            return true
        }
    return true
    }

    const isAuthenticated = checkUserAuthentication();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login')
        }
    }, [navigate, isAuthenticated])

    return isAuthenticated && <WrappedComponent {...props} />
}


export default withAuthorization;
