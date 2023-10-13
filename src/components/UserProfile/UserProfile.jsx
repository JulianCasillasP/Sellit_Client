// UserProfile.js

import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';

function UserProfile() {
  const authContext = useContext(AuthContext);

 
  const { username, email } = authContext.user;

  return (
    <div>
      
      <h3>{username}</h3>
      <h3>{email}</h3>
    </div>
  );
}

export default UserProfile;