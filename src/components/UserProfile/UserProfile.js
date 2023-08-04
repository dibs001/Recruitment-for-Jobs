import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const [qualifications, setQualifications] = useState('');
  const [experience, setExperience] = useState('');
  const [preferences, setPreferences] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // implement logic to handle form submission (e.g., save data to database)
    console.log('Qualifications:', qualifications);
    console.log('Experience:', experience);
    console.log('Preferences:', preferences);
  };

  return (
    <div className="user-profile-form">
      <h2>Create Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Qualifications:</label>
          <textarea
            value={qualifications}
            onChange={(e) => setQualifications(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Experience:</label>
          <textarea
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Preferences:</label>
          <textarea
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
          />
        </div>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
