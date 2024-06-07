import React from 'react';

const UserDetails = ({ user }) => {
  const {Name, Bio, image,DateOfBirth, Location} = user;
  return (
    <div className = "container"> 
    <div className="user-details">
      <img src={image} alt="" srcset="" />
      <h2>{Name}</h2>
      <p>{Bio}</p>
      <p><strong>Date of Birth:</strong> {DateOfBirth}</p>
      <p><strong>Location:</strong> {Location}</p>
    </div>
    </div>
  );
};

export default UserDetails;
