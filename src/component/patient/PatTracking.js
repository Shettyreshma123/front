// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import jwt_decode from 'jwt-decode';

// function PatientProfile({ accessToken }) {
//   const [patientDetails, setPatientDetails] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchPatientProfile();
//   }, []);

//   const fetchPatientProfile = async () => {
//     try {
//       const decodedToken = jwt_decode(accessToken);
//       const patientId = decodedToken.user_id;

//       const response = await axios.get(`http://localhost:3000/api/hbms/reporttracking/${patientId}`, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });

//       const patientData = response.data.profile; // Adjust this to match your response structure
//       setPatientDetails(patientData);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching patient profile:', error);
//       setError('Error fetching patient profile.');
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>Patient Profile</h2>
//       <p><strong>ID:</strong> {patientDetails.id}</p>
//       <p><strong>Username:</strong> {patientDetails.username}</p>
//       <p><strong>Email:</strong> {patientDetails.email}</p>
//       {/* Render other patient details here */}
//     </div>
//   );
// }

// export default PatientProfile;




// Profile.js

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import jwt_decode from 'jwt-decode';

// function Profile({ accessToken }) {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchProfileData();
//   }, []);

//   const fetchProfileData = async () => {
//     try {
//       // const decodedToken = jwt_decode(accessToken);
//       const userId = decodedToken.user_id;
//       const token = localStorage.getItem("access_token");
//       const decodedToken = jwt_decode(token);
//   console.log('Decoded Token:', decodedToken);


//       const response = await axios.get(`http://localhost:3000/api/hbms/patients/${userId}`, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });

//       const profileData = response.data.patient;
//       setProfile(profileData);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching user profile:', error);
//       setError('Error fetching user profile.');
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>Profile</h2>
//       <div className="profile-details">
//         <div className="profile-info">
//           <p>Username: {profile.username}</p>
//           <p>Email: {profile.email}</p>
//           <p>Phone: {profile.phone}</p>
//           <p>Gender: {profile.gender}</p>
//           {/* Display other patient details */}
//         </div>
//       </div>
//       <hr />
//       <h3>Appointment Details</h3>
//       <div className="appointment-details">
//         <p>Date: {profile.date}</p>
//         <p>Chief Complaint: {profile.chiefcomplaint}</p>
//         <p>Address: {profile.address}</p>
//         {/* Display other appointment details */}
//       </div>
//     </div>
//   );
// }

// export default Profile;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MedicalHistory() {
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetchMedicalHistory();
  }, []);

  const fetchMedicalHistory = async () => {
    try {
      const storedPatientId = localStorage.getItem('patientId');
      
      if (storedPatientId) {
        const response = await axios.get(`http://localhost:3000/api/hbms/reporttracking/${storedPatientId}`);
        const medicalHistoryData = response.data.medicalHistory;
        setMedicalHistory(medicalHistoryData);

        const patientProfile = response.data.patient;
        setProfile(patientProfile);

        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching medical history:', error);
      setError('Error fetching medical history.');
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <div className="profile-details">
        <div className="profile-info">
          <p>Username: {profile.username}</p>
          <p>Email: {profile.email}</p>
          <p>Phone: {profile.phone}</p>
          <p>Gender: {profile.gender}</p>
          <p>Address: {profile.address}</p>
        </div>
      </div>
      <hr />
      <h3>Appointment Details</h3>
      <div className="appointment-details">
        <p>Email: {profile.email}</p>
        <p>Date: {profile.date}</p>
        <p>Bloodgroup: {profile.bloodgroup}</p>
        <p>Chief Complaint: {profile.chiefcomplaint}</p>
      </div>
    </div>
  );
}

export default MedicalHistory;
