// import React, { useState } from "react";
// import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import axios from "axios";

// const OtherInformationModal = ({ open, onClose, patient }) => {
//   const [formData, setFormData] = useState({
//     username: patient.username,
//     email: patient.email,
//     age: patient.age,
//     chiefcomplaint: patient.chiefcomplaint, // Note the corrected field name here
//     bloodgroup: patient.bloodgroup, // Note the corrected field name here
//     testtype: patient.testtype,
//   });

//   const modalStyle = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: "85%", // Increase modal width
//     maxWidth: "600px", // Increase maximum modal width
//     bgcolor: "white",
//     boxShadow: 24,
//     p: 4,
//     borderRadius: "8px",
//   };

//   const handleClose = () => {
//     onClose();
//   };

//   const handleFormChange = (field, value) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [field]: value,
//     }));
//   };

//   const handleFormSubmit = async () => {
//     try {
//       await axios.put(`http://localhost:3000/api/hbms/patient_lab/${patient.id}`, formData);
//       if (formData.testtype === "BloodTest") {
//         // Move the patient to the laboratory
//         await axios.put(`http://localhost:3000/api/hbms/list_bloodtestlab/${patient.id}`);
//       }
//       // Handle success or show a notification
//       console.log("succes");
//       handleClose();
//     } catch (error) {
//       console.error("Error submitting data:", error);
//       // Handle error or show a notification
//     }
//   };

//   return (
//     <Modal open={open} onClose={handleClose}>
//     <Box sx={modalStyle}>
//         <Typography variant="h5" gutterBottom>
//           Other Information
//         </Typography>
//         <TextField
//           label="Name"
//           value={formData.username}
//           onChange={(e) => handleFormChange("username", e.target.value)}
//           fullWidth
//         />
//         <TextField
//           label="Email"
//           value={formData.email}
//           onChange={(e) => handleFormChange("email", e.target.value)}
//           fullWidth
//         />
//         <TextField
//           label="Age"
//           value={formData.age}
//           onChange={(e) => handleFormChange("age", e.target.value)}
//           fullWidth
//         />
//          <TextField
//           label="CheifComplaint"
//           value={formData.chiefcomplaint}
//           onChange={(e) => handleFormChange("chiefcomplaint", e.target.value)}
//           fullWidth
//         />
//          <TextField
//           label="BloodGroup"
//           value={formData.bloodgroup}
//           onChange={(e) => handleFormChange("bloodgroup", e.target.value)}
//           fullWidth
//         />
//          <TextField
//           label="Message"
//           value={formData.testtype}
//           onChange={(e) => handleFormChange("testtype", e.target.value)}
//           fullWidth
//         />
//         {/* Add more fields as needed */}
//         <Button onClick={handleFormSubmit} color="primary">
//           Submit
//         </Button>
//         <Button onClick={handleClose} color="secondary">
//           Close
//         </Button>
//       </Box>
//     </Modal>
//   );
// };

// export default OtherInformationModal;







import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import axios from "axios";

const OtherInformationModal = ({ open, onClose, patient }) => {
  const [formData, setFormData] = useState({
    username: patient.username,
    email: patient.email,
    age: patient.age,
    chiefcomplaint: patient.chiefcomplaint,
    bloodgroup: patient.bloodgroup,
    testtype: patient.testtype,
  });

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "85%",
    maxWidth: "600px",
    bgcolor: "white",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
  };

  const handleClose = () => {
    onClose();
  };

  const handleFormChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleFormSubmit = async () => {
    try {
      await axios.put(`http://localhost:3000/api/hbms/patient_lab/${patient.id}`, formData);
      
      // Check if the test type is "BloodTest"
      if (formData.testtype === "BloodTest") {
        // Move the patient to the laboratory
        await axios.put(`http://localhost:3000/api/hbms/list_bloodtestlab/${patient.id}`);
        console.log("Patient moved to laboratory");
      }
      
      // Handle success or show a notification
      console.log("Success");
      handleClose();
    } catch (error) {
      console.error("Error submitting data:", error);
      // Handle error or show a notification
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
    <Box sx={modalStyle}>
        <Typography variant="h5" gutterBottom>
          Other Information
        </Typography>
        <TextField
          label="Name"
          value={formData.username}
          onChange={(e) => handleFormChange("username", e.target.value)}
          fullWidth
        />
        <TextField
          label="Email"
          value={formData.email}
          onChange={(e) => handleFormChange("email", e.target.value)}
          fullWidth
        />
        <TextField
          label="Age"
          value={formData.age}
          onChange={(e) => handleFormChange("age", e.target.value)}
          fullWidth
        />
         <TextField
          label="CheifComplaint"
          value={formData.chiefcomplaint}
          onChange={(e) => handleFormChange("chiefcomplaint", e.target.value)}
          fullWidth
        />
         <TextField
          label="BloodGroup"
          value={formData.bloodgroup}
          onChange={(e) => handleFormChange("bloodgroup", e.target.value)}
          fullWidth
        />
         <TextField
          label="testtype"
          value={formData.testtype}
          onChange={(e) => handleFormChange("testtype", e.target.value)}
          fullWidth
        />
        {/* Add more fields as needed */}
        <Button onClick={handleFormSubmit} color="primary">
          Submit
        </Button>
        <Button onClick={handleClose} color="secondary">
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default OtherInformationModal;