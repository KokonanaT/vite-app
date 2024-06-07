import React, { useState, useEffect } from 'react';
import UserDetails from './user-details';
const UserProfile = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  const usersArray = [
    { Name: 'Ani Nancy', Bio: 'Frontend Developer ', DateOfBirth: '1996-01-23', Location: 'Spain', image: '/tech girl.jpg' },
    { Name: 'Jonathan Dave', Bio: 'Graphic Designer ', DateOfBirth: '1993-05-12', Location:'USA', image: '/tech man.jpg' },
    { Name: 'Lamb Washington', Bio: 'Project Manager', DateOfBirth: '1991-09-04', Location: 'Singapore', image: '/tech girl 2.jpg'  }
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
