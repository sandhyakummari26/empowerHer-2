import React from 'react';
import UserInfo from './UserInfo';

function UserProfile() {
  const user = {
    name: 'Sandhya',
    age: 19
  };

  return (
    <div>
      <h2>User Profile</h2>
      <UserInfo name={user.name} age={user.age} />
    </div>
  );
}

export default UserProfile;
