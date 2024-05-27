import React, { useState, useEffect } from 'react';
import UserDetails from './user-details';
const UserProfile = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  const usersArray = [
    { Name: 'Ani Nancy', Bio: 'Frontend Developer at Wisville', DateOfBirth: '1996-01-23' },
    { Name: 'Jonathan Dave', Bio: 'Graphic Designer at Lisonville', DateOfBirth: '1993-05-12' },
    { Name: 'Lamb Washington', Bio: 'Project Manager at Detrox', DateOfBirth: '1991-09-04' }
  ];

  useEffect(() => {
    setTimeout(() => {
      setUserList(usersArray);        
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="profile">
      {loading ? (
        <div>Loading...</div>
      ) : (
        userList.map((user, index) => (
          <UserDetails key={index} user={user} />
        ))
      )}
    </div>
  );
};

export default UserProfile;
