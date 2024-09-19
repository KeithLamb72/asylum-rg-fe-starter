import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout } = useAuth0();
    const handleLogout = () => {
        logout({
            returnTo: window.location.origin,
        });
    };

    return (
        <span
        style={{ color: '#E2F0F7', 
                 cursor: 'pointer', 
                paddingLeft: '75px' }}
        onClick={handleLogout} 
        >
            Log Out
        </span>
    );
};

export default LogoutButton;