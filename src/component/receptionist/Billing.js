// import React, { useState } from 'react';
// import axios from 'axios';
// import { Button, Form, FormGroup, FormControl, Table } from 'react-bootstrap';
// import { toast } from 'react-toastify';

// const Billing = () => {
//   const [username, setUsername] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [selectedPatientId, setSelectedPatientId] = useState(null);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3000/api/hbms/search_report/${username}`);
//       if (response.status === 200) {
//         const searchData = response.data;
//         setSearchResults(searchData);
//         setSelectedPatientId(null); 
//       } else {
//         toast.error(response.data);
//       }
//     } catch (error) {
//       console.error('Error fetching search results:', error);
//     }
//   };
//   const handleGenerateReport = async (patientId) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:3000/api/hbms/report/${patientId}`,
//         {
//           responseType: 'blob', 
//         }
//       );

//       const blob = new Blob([response.data], { type: 'application/pdf' });
//       const url = URL.createObjectURL(blob);

//       window.open(url);
//     } catch (error) {
//       console.error('Error fetching patient report:', error);
//     }
//   };

//   const handlePatientSelect = (patientId) => {
//     setSelectedPatientId(patientId);
//     handleGenerateReport(patientId); 
//   };

//   return (
//     <div>
//       <h2>Generate Patient Report</h2>
//       <Form>
//         <FormGroup>
//           <FormControl
//             type="text"
//             placeholder="Enter patient username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </FormGroup>
//         <Button onClick={handleSearch}>Search</Button>
//       </Form>
//       {searchResults.length > 0 && (
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Username</th>
//               <th>Email</th>
//               <th>Phone</th>
//             </tr>
//           </thead>
//           <tbody>
//             {searchResults.map((patient) => (
//               <tr key={patient.id}>
//                 <td>
//                   <span
//                     style={{ cursor: 'pointer', textDecoration: 'underline' }}
//                     onClick={() => handlePatientSelect(patient.id)}
//                   >
//                     {patient.id}
//                   </span>
//                 </td>
//                 <td>{patient.username}</td>
//                 <td>{patient.email}</td>
//                 <td>{patient.phone}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </div>
//   );
// };

// export default Billing;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Button, Form, FormGroup, FormControl, Table, Modal } from 'react-bootstrap';
// import { toast } from 'react-toastify';

// const Billing = () => {
//   const [username, setUsername] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [selectedPatientData, setSelectedPatientData] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [modalFormData, setModalFormData] = useState({
//     consultationFee: 0,
//     laboratoryFee: 0,
//     // Add more fields here
//   });

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3000/api/hbms/search_report/${username}`);
//       if (response.status === 200) {
//         const searchData = response.data;
//         setSearchResults(searchData);
//         setSelectedPatientData(null);
//       } else {
//         toast.error(response.data);
//       }
//     } catch (error) {
//       console.error('Error fetching search results:', error);
//     }
//   };

//   const handleGenerateReport = async () => {
//     try {
//       if (selectedPatientData) {
//         setShowModal(false); // Close the modal
//         const response = await axios.put(
//           `http://localhost:3000/api/hbms/addbilling/${selectedPatientData.id}`,
//           modalFormData, // Send the form data to the server
//           {
//             responseType: 'blob',
//           }
//         );

//         const blob = new Blob([response.data], { type: 'application/pdf' });
//         const url = URL.createObjectURL(blob);

//         window.open(url);
//       }
//     } catch (error) {
//       console.error('Error fetching patient report:', error);
//     }
//   };

//   const handlePatientSelect = async (patientId) => {
//     try {
//       const response = await axios.get(`http://localhost:3000/api/hbms/listbilling/${patientId}`);
//       if (response.status === 200) {
//         setSelectedPatientData(response.data);
//         setShowModal(true); // Open the modal
//       }
//     } catch (error) {
//       console.error('Error fetching patient details:', error);
//     }
//   };

//   const handleModalInputChange = (e) => {
//     const { name, value } = e.target;
//     setModalFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <h2>Generate Patient Report</h2>
//       <Form>
//         <FormGroup>
//           <FormControl
//             type="text"
//             placeholder="Enter patient username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </FormGroup>
//         <Button onClick={handleSearch}>Search</Button>
//       </Form>
//       {searchResults.length > 0 && (
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Username</th>
//               <th>Email</th>
//               <th>Phone</th>
//             </tr>
//           </thead>
//           <tbody>
//             {searchResults.map((patient) => (
//               <tr key={patient.id}>
//                 <td>
//                   <span
//                     style={{ cursor: 'pointer', textDecoration: 'underline' }}
//                     onClick={() => handlePatientSelect(patient.id)}
//                   >
//                     {patient.id}
//                   </span>
//                 </td>
//                 <td>{patient.username}</td>
//                 <td>{patient.email}</td>
//                 <td>{patient.phone}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}

//       {/* Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Patient Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedPatientData && (
//            <div>
// 		   <p>Patient ID: {selectedPatientData.id}</p>
// 		   <p>Username: {selectedPatientData.username}</p>
// 		   <Form>
// 			 <FormGroup>
// 			   <FormControl
// 				 type="number"
// 				 name="consultationFee"
// 				 placeholder="Consultation Fee"
// 				 value={modalFormData.consultationFee}
// 				 onChange={handleModalInputChange}
// 			   />
// 			 </FormGroup>
// 			 <FormGroup>
// 			   <FormControl
// 				 type="number"
// 				 name="laboratoryFee"
// 				 placeholder="Laboratory Fee"
// 				 value={modalFormData.laboratoryFee}
// 				 onChange={handleModalInputChange}
// 			   />
// 			 </FormGroup>
// 		   </Form>
// 		   {/* Add other patient details here */}
// 		 </div>
// 	   )}
// 	 </Modal.Body>
// 	 <Modal.Footer>
// 	   <Button onClick={handleGenerateReport}>Generate Report</Button>
// 	 </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default Billing;





import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, FormControl, Table, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Billing = () => {
  const [username, setUsername] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPatientData, setSelectedPatientData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalFormData, setModalFormData] = useState({
    consultationFee: 0,
    laboratoryFee: 0,
  });

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/hbms/search_report/${username}`);
      if (response.status === 200) {
        const searchData = response.data;
        setSearchResults(searchData);
        setSelectedPatientData(null);
      } else {
        toast.error(response.data);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleGenerateReport = async () => {
    try {
      if (selectedPatientData) {
        setShowModal(false); // Close the modal
  
        // Send a GET request to the backend to generate the PDF
        const response = await axios.get(
          `http://localhost:3000/api/hbms/listbilling`, // Adjust the URL
          {
            params: {
              patientId: selectedPatientData.id,
              consultationFee: modalFormData.consultationFee,
              laboratoryFee: modalFormData.laboratoryFee,
            },
            responseType: 'blob', // Expecting a binary response
          }
        );
  
        // Create a URL for the Blob response
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
  
        // Open a new window to display the PDF
        const pdfWindow = window.open();
        pdfWindow.location.href = url;
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };
  

  const handlePatientSelect = async (patientId) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/hbms/addbilling/${patientId}`);
      if (response.status === 200) {
        setSelectedPatientData(response.data);
        setShowModal(true); // Open the modal
      }
    } catch (error) {
      console.error('Error fetching patient details:', error);
    }
  };

  const handleModalInputChange = (e) => {
    const { name, value } = e.target;
    setModalFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Generate Patient Report</h2>
      <Form>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="Enter patient username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <Button onClick={handleSearch}>Search</Button>
      </Form>
      {searchResults.length > 0 && (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      {searchResults.map((patient) => (
        <tr key={patient.id}>
          <td>
            <span
              style={{ cursor: 'pointer', textDecoration: 'underline' }}
              onClick={() => handlePatientSelect(patient.id)}
            >
              {patient.id}
            </span>
          </td>
          <td>{patient.username}</td>
          <td>{patient.email}</td>
          <td>{patient.phone}</td>
        </tr>
      ))}
    </tbody>
  </Table>
)}

{/* Modal */}
<Modal show={showModal} onHide={() => setShowModal(false)} centered>
  <Modal.Header closeButton>
    <Modal.Title>Bill Details</Modal.Title>
  </Modal.Header>
  {selectedPatientData && (
    <Modal.Body>
      {/* Display the selected patient's details */}
      {/* <p>Username: {selectedPatientData.username}</p> */}
      {/* <p>Email: {selectedPatientData.email}</p>
      <p>Phone: {selectedPatientData.phone}</p> */}

      {searchResults.map((patient) => (
        <tr style={{ fontWeight: 'bold', color: 'blue' }}
        key={patient.username}>
          <label htmlFor="username">Patient Name:</label>
          <td style={{ fontWeight: 'bold', color: 'blue' }}>
          {patient.username}</td> {/* Display the username here */}
        </tr>
      ))}
      {/* Input fields for consultationFee and laboratoryFee */}
      <div className="form-group">
        <label htmlFor="consultationFee">Consultation Fee:</label>
        <input
          type="text"
          className="form-control"
          id="consultationFee"
          name="consultationFee"
          value={modalFormData.consultationFee}
          onChange={handleModalInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="laboratoryFee">Laboratory Fee:</label>
        <input
          type="text"
          className="form-control"
          id="laboratoryFee"
          name="laboratoryFee"
          value={modalFormData.laboratoryFee}
          onChange={handleModalInputChange}
        />
      </div>
    </Modal.Body>
  )}
  <Modal.Footer>
  <Button onClick={() => {
      handleGenerateReport(); // Generate PDF
      setShowModal(false); // Close the modal
    }}
  >Submit</Button>
  </Modal.Footer>
</Modal>
    </div>
  );
};

export default Billing;
