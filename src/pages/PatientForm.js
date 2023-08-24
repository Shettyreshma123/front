// import React, { useState,useEffect  } from "react";
// import axios from "axios";
// import "./PatForm.css";
// import { useNavigate,useLocation  } from "react-router-dom";
// import { toast } from "react-toastify";
// // import Patient from "../component/admin/Patient";

// const PatientForm = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const signupData = location.state;
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     gender: "",
//     age: "",
//     phone: "",
//     dateofbirth: "",
//     chiefcomplaint: "",
//     date: "",
//     time: "",
//     address: "",
//   });

//   useEffect(() => {
//     if (signupData) {
//       // Use the signupData received from the signup page
//       setFormData({
//         username: signupData.firstname + " " + signupData.lastname,
//         email: signupData.email,
//         // ... other fields
//       });
//     }
//   }, [signupData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
// 	try {
// 		const response = await axios.post("http://localhost:3000/api/hbms/patient_form", formData);
  
// 		if (response.status === 201) {
// 		  // Registration successful, redirect to the patient page
// 		  navigate("/patient");
// 		} else {
// 		  console.log(response.data);
// 		  toast.success(response.data.message);
// 		}
// 	  } catch (error) {
// 		console.log(error);
// 		toast.error("Error registering patient");
// 	  }
// 	};

//   const formatDate = (date) => {
//     const [year, month, day] = date.split("-");
//     return `${day}/${month}/${year}`;
//   };

//   return (
//     <div>
//       <h2>Patient Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" name="username" value={formData.username} onChange={handleChange} required />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         </label>
//         <br />
//         <label>
//           Gender:
//           <select name="gender" value={formData.gender} onChange={handleChange} required>
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </label>
//         <br />
//         <label>
//           Age:
//           <input type="number" name="age" value={formData.age} onChange={handleChange} required />
//         </label>
//         <br />
//         <label>
//           Phone:
//           <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
//         </label>
//         <br />
//         <label>
//           Date of Birth:
//           <input
//             type="date"
//             name="dateofbirth"
//             value={formData.dateofbirth}
//             onChange={handleChange}
//             placeholder="dd/mm/yyyy"
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Chief Complaint:
//           <input type="text" name="chiefcomplaint" value={formData.chiefcomplaint} onChange={handleChange} required />
//         </label>
//         <br />
//         <label>
//           Date:
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             placeholder="dd/mm/yyyy"
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Time:
//           <input type="time" name="time" value={formData.time} onChange={handleChange} required />
//         </label>
//         <br />
//         <label>
//           Address:
//           <textarea name="address" value={formData.address} onChange={handleChange} required />
//         </label>
//         <br />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default PatientForm;


// import React, { useState } from "react";
// import axios from "axios";
// import "./PatForm.css";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// // import Patient from "../component/admin/Patient";

// const PatientForm = () => {
//   const navigate = useNavigate();

//   const storedSignupData = JSON.parse(localStorage.getItem("signupData")) || {};
//   // const storedLoginUser = JSON.parse(localStorage.getItem("loginUser")) || {};
  
//   // const [signupData, setSignupData] = useState({
// const loginfirstname=localStorage.getItem("loginDataF");
// const loginlastname=localStorage.getItem("loginDataL");
// const loginemail=localStorage.getItem("loginDataE");
// const loginphone=localStorage.getItem("loginDataP");
// const logingender=localStorage.getItem("loginDataG");
// const loginbloodgroup=localStorage.getItem("loginDataB");
//   const [formData, setFormData] = useState({
//     username: loginfirstname + " " + loginlastname,
//     email:loginemail,
//     gender:logingender,
//     age: "",
//     phone:loginphone,
//     dateofbirth: "",
//     chiefcomplaint: "",
//     bloodgroup:loginbloodgroup,
//     date: "",
//     // time: "",
//     address:"",
//   });


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//     if (name === "dateofbirth") {
//       const birthDate = new Date(value);
//       const today = new Date();
//       const age = today.getFullYear() - birthDate.getFullYear();
//       setFormData((prevFormData) => ({ ...prevFormData, age }));
//     }

//   };
//   const formatDate = (date) => {
//     const [day, month, year] = date.split("-");
//     return `${year}-${month}-${day}`;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formattedDateOfBirth = formatDate(formData.dateofbirth);
//     const formattedDate = formatDate(formData.date);
   
// 	try {
// 		// const response = await axios.post("http://localhost:3000/api/hbms/patient_form", formData);
//     const response = await axios.put("http://localhost:3000/api/hbms/update_patient", {
//     ...formData,
//         dateofbirth: formattedDateOfBirth,
//         date: formattedDate,
     
//     });

// 		if (response.status === 201) {
// 		  // Registration successful, redirect to the patient page
//       const patientId = response.data.patient.user_id;
//       localStorage.setItem("patientId", patientId);
//       const patientEmail = response.data.patient.email;
//       localStorage.setItem("patientEmail", patientEmail);
//       console.log(response.data);

//       if (localStorage.getItem("loginDataE") === patientEmail) {
//         console.log(response.data);
//         navigate("/pathome");
//       } else {
//         toast.success(response.data.message);
//       }
//     } else {
//       console.log(response.data);
//       toast.success(response.data.message);
//     }
//   } catch (error) {
//     console.log(error);
//     toast.error("Error registering patient");
//   }
// };

// 	// };

  
  

//   return (
//     <div>
//       <h2>Patient Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Patient Name:
//           <input type="text" name="username" value={formData.username} onChange={handleChange} required disabled/>
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="text" name="email" value={formData.email} onChange={handleChange} required disabled/>
//         </label>
//         <br />
//         <label>
//           Gender:
//           <input type="text" name="gender" value={formData.gender} onChange={handleChange} required disabled/>
//         </label>
//         <br />
//         <label>
//           Date of Birth:
//           <input
//             type="date"
//             name="dateofbirth"
//             value={formData.dateofbirth}
//             onChange={handleChange}
//             required
//           />
         
//         </label>
//         <br />
//         <label>
//           Phone:
//           <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required disabled/>
//         </label>
//         <br />
//         <label>
//           Age:
//           <input type="number" name="age" value={formData.age} onChange={handleChange} required />
//         </label>
//         <br />
        
       
//         <label>
//           Chief Complaint:
//           <input type="text" name="chiefcomplaint" value={formData.chiefcomplaint} onChange={handleChange} required />
//         </label>
//         <br />
//         <label>
//           BloodGroup:
//           <input type="text" name="bloodgroup" value={formData.bloodgroup} onChange={handleChange} required disabled/>
//         </label>
//         <br />
//         <label>
//           Date:
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         {/* <label>
//           Time:
//           <input type="time" name="time" value={formData.time} onChange={handleChange} required />
//         </label>
//         <br /> */}
//         <label>
//           Address:
//           <textarea name="address" value={formData.address} onChange={handleChange} required />
//         </label>
//         <br />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default PatientForm;




import React, { useState } from "react";
import axios from "axios";
import "./PatForm.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PatientForm = () => {
  const navigate = useNavigate();
  const loginuserID = localStorage.getItem("loginDataID");
  const loginfirstname = localStorage.getItem("loginDataF");
  const loginlastname = localStorage.getItem("loginDataL");
  const loginusername = localStorage.getItem("loginDataU");
  const loginemail = localStorage.getItem("loginDataE");
  const loginphone = localStorage.getItem("loginDataP");
  const logingender = localStorage.getItem("loginDataG");
  const loginbloodgroup = localStorage.getItem("loginDataB");
  const [formData, setFormData] = useState({
    username: loginusername,
    email: loginemail,
    gender: logingender,
    age: "",
    phone: loginphone,
    dateofbirth: "",
    department: "",
    chiefcomplaint: "",
    bloodgroup: loginbloodgroup,
    date: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    if (name === "dateofbirth") {
      const birthDate = new Date(value);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      setFormData((prevFormData) => ({ ...prevFormData, age }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: { auth: localStorage.getItem("access_token") },
      };
      const userId = localStorage.getItem("loginDataID"); // Get the logged-in user's ID
      const response = await axios.put(
        `http://localhost:3000/api/hbms/patient_form/${userId}`,
        formData,config
      );
  
      if (response.status === 200) {
        console.log(response.data);
        navigate("/pathome");
      } else {
        console.log(response.data);
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error updating patient data");
    }
  };
  

  return (
    <div>
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Patient Name:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            disabled
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled
          />
        </label>
        <br />
        <label>
          Gender:
          <input
            type="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            disabled
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled
          />
        </label>
        <br />
        <label>
          BloodGroup:
          <input
            type="text"
            name="bloodgroup"
            value={formData.bloodgroup}
            onChange={handleChange}
            required
            disabled
          />
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            name="dateofbirth"
            value={formData.dateofbirth}
            onChange={handleChange}
            placeholder="dd/mm/yyyy"
            required
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Chief Complaint:
          <input
            type="text"
            name="chiefcomplaint"
            value={formData.chiefcomplaint}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="dd/mm/yyyy"
            required
          />
        </label>
        <br />
        <label>
          Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default PatientForm;