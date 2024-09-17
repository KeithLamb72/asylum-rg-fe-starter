import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user } = useAuth0();

  const username = user.email.split('@')[0];

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default Profile;