import React, { useState, useEffect } from 'react';

function UserProfile() {
  const [userInformation, setUserInformation] = useState(null);
  const [userId, setUserId] = useState('user_id_123'); // Initial user ID (can be changed by the user)

  useEffect(() => {
    // Function to fetch user information
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(`/api/user/${userId}`); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch user information');
        }
        const userData = await response.json();
        setUserInformation(userData);
      } catch (error) {
        console.error(error);
        setUserInformation(null);
      }
    };

    // Call the fetchUserInfo function when the component mounts or when userId changes
    fetchUserInfo();
  }, [userId]);

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  return (
    <div>
      <h1>User Profile</h1>
      <label>
        Enter User ID:
        <input type="text" value={userId} onChange={handleUserIdChange} />
      </label>
      {userInformation ? (
        <div>
          <p>User ID: {userInformation.id}</p>
          <p>User Name: {userInformation.name}</p>
          {/* Add more user information fields here */}
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
}

export default UserProfile;
