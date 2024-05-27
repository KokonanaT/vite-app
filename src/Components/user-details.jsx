import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div className = "container"> 
    <div className="user-details">
      <h2>{user.Name}</h2>
      <p>{user.Bio}</p>
      <p><strong>Date of Birth:</strong> {user.DateOfBirth}</p>
    </div>
    </div>
  );
};

export default UserDetails;
