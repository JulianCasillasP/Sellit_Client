import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import './UserProfile.css';

function UserProfile() {
  const authContext = useContext(AuthContext);

  const { username, email, profileImage } = authContext.user;

  return (
    <div className="user-profile-card">
      {profileImage && (
        <img
          src={profileImage}
          alt="User Profile"
          className="profile-image"
        />
      )}
      <h3>{username}</h3>
      <h3>{email}</h3>
    </div>
  );
}

export default UserProfile;