import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return ( 
        <span
            style={{ color: '#E2F0F7', 
            cursor: 'pointer', 
            paddingLeft: '75px' }}
            onClick={() => loginWithRedirect()}
        >
            Log In
        </span>
    );
};

export default LoginButton;