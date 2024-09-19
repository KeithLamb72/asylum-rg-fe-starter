import React from 'react';

import LoginButton from '../components/pages/Profile/login-button';
import LogoutButton from '../components/pages/Profile/logout-button';

import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = () => {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;