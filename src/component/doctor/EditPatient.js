// import React, { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import "../doctor/style.css";
// // import isEmpty from "react-toast-notification/utils/isEmpty";

// const EditPatient = ({
//   editModal,
//   handleEdit,
//   onClose,
//   data,
//   setData,
//   onSave,
// }) => {
//   const [isPhoneValid, setIsPhoneValid] = useState(false);
//   const [isPhone, setIsPhone] = useState("");
//   const [phoneError, setPhoneError] = useState(false);
//   const [isUsername, setIsUsername] = useState("");
//   const [isEmail, setIsEmail] = useState("");
//   const [isAddress, setIsAddress] = useState("");
//   const [isBloodGroup, setIsBloodGroup] = useState("");
//   const [isChiefcomplaint, setIsChiefcomplaint] = useState("");
//   const [isSugarlevel, setIsSugarlevel] = useState("");
//   const [isGender, setIsGender] = useState("");
//   const [isMessage, setIsMessage] = useState("");
//   const [isAge, setIsAge] = useState("");
//   const [isTimeofregistration, setIsTimeofregistration] = useState("");
//   const [isBloodpressure, setIsBloodpressure] = useState("");


//   const [isValid, setIsValid] = useState({
//     emailValid: false,
//     passwordValid: false,
//   });

//   const handleUsernameChange = (e) => {
//     setData({ ...data, username: e.target.value });
//   };

//   const handleEmailChange = (e) => {
//     if (/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(e.target.value)) {
//       setIsValid({ ...isValid, emailValid: true });
//     } else {
//       setIsValid({ ...isValid, emailValid: false });
//     }
//     setData({ ...data, email: e.target.value });
//   };

//   const handleGenderChange = (e) => {
//     setData({ ...data, gender: e.target.value });
//   };

//   const handleAgeChange = (e) => {
//     setData({ ...data, age: e.target.value });
//   };

 
//   const handlePhoneChange = (value) => {
//     // console.log(value);
//     setData({ ...data, phone: value });
//     // setIsPhone(value);
//   };

//   // const handlePhoneChange = (value) => {
//   //   setIsPhone(value);
//   //   setData({ ...data, phone: value });
//   // };

//   // const handlePhoneChange = (value) => {
//   //   setIsPhone(value);
//   //   setData({ ...data, phone: value });

//   //   // Validate the phone number
//   //   if (value && !PhoneInput.isValidPhoneNumber(value)) {
//   //     setPhoneError(true);
//   //   } else {
//   //     setPhoneError(false);
//   //   }
//   // };
  

//   const handleBloodgroupChange = (e) => {
//     setData({ ...data, bloodgroup: e.target.value });
//   };

//   const handleChiefcomplaintChange = (e) => {
//     setData({ ...data, chiefcomplaint: e.target.value });
//   };

//   const handleTimeofregistrationChange = (e) => {
//     setData({ ...data, timeofregistration: e.target.value });
//   };
//   // const handleBloodpressureChange = (e) => {
//   //   setData({ ...data, bloodpressure: e.target.value });
//   // };
//   // const handleSugarlevelChange = (e) => {
//   //   setData({ ...data, sugarlevel: e.target.value });
//   // };

//   const handleAddressChange = (e) => {
//     setData({ ...data, address: e.target.value });
//   };
//   const handleTesttypeChange = (e) => {
//     setData({ ...data, testtype: e.target.value });
//   };
//   const handlePrescribeChange = (e) => {
//     setData({ ...data, prescribe: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(data);
//     const formData = new URLSearchParams();
//     formData.append("username", data.username);
//     formData.append("email", data.email);
//     formData.append("gender",data.gender);
//     formData.append("age",data.age);
//     formData.append("phone", data.phone);
//     formData.append("bloodgroup",data.bloodgroup);
//     formData.append("chiefcomplaint",data.chiefcomplaint);
//     formData.append("timeofregistration", data.timeofregistration);
//     // formData.append("bloodpressure", data.bloodgroup);
//     // formData.append("sugarlevel", data.sugarlevel);
//     formData.append("address", data.address);
//     formData.append("testtype", data.testtype);
//     formData.append("prescribe", data.prescribe);

//     const config = {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         auth: localStorage.getItem("access_token"),
//       },
//     };

//     try {
//       const response = await axios.put(
//         `http://localhost:3000/api/hbms/update_patform/${data.id}`,
       
//         formData,
//         config
//       );

//       if (response.status === 200) {
//         onClose();
//         setData({
//           username: "",
//           email: "",
//           gender: "",
//           age: "",
//           phone: "",
//           bloodgroup: "",
//           chiefcomplaint: "",
//           timeofregistration: "",
//           // bloodpressure: "",
//           // sugarlevel: "",
//           address: "",
//           testtype:"",
//           Prescribe:"",
//         });
//         toast.success("Item updated successfully!");
//       } else {
//         console.log(response.data);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <Modal
//       isOpen={editModal}
//       toggle={handleEdit}
//       centered
//       // className="modal-right"
//     >
//       <ModalHeader toggle={handleEdit} onClick={onClose}>
//         Edit Patient
//       </ModalHeader>
//       <div className="containers">
//         <ModalBody>
//           <div className="row">
//             <div className="col">
//               <div className="form-group">
//                 <label htmlFor="username">Username:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="username"
//                   value={data.username}
//                   onChange={handleUsernameChange}
//                   required
//                 />
//               </div>
//               </div>
//             <div className="col">
//               <div className="form-group">
//                 <label htmlFor="email">Email:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="email"
//                   value={data.email}
//                   onChange={handleEmailChange}
//                   required
//                 />
//               </div>
//             </div> 
//           </div>

//           <div className="row">
//             <div className="col">
//               <div className="form-group">
//                 <label htmlFor="gender">Gender:</label>
//                 <select
//                   className="form-control"
//                   id="gender"
//                   value={data.gender}
//                   onChange={handleGenderChange}
//                   required
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>
//              </div>

          
//             <div className="col">
//               <div className="form-group">
//             <label htmlFor="age">Age:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="age"
//               value={data.age}
//               onChange={handleAgeChange}
//               required
//             />
//           </div>
//           </div>
//           </div>

//           <div className="row">
//             <div className="col">
//               <div className="form-group">
//                 <label htmlFor="phone">Phone:</label>
//                 <PhoneInput
//                   international
//                   defaultCountry="IN"
//                   value={data.phone}
//                   onChange={handlePhoneChange}
//                   required
//                 /> 

//                 {/* <label htmlFor="phone">Phone:</label>
//             <input
//               // international
//               // defaultCountry="IN"
//               type="number"
//               name="phone"
//               value={data.phone}
//               onChange={handlePhoneChange}
//               required
//             /> */}
//                 {/* {phoneError && (
//                 <div className="error-message">Invalid phone number</div>
//               )} */}
//               {/* </div>
//             </div>
//           </div> */}
//             </div>
//             </div> 
        
          
        
//           <div className="col">
//           <div className="form-group">
//             <label htmlFor="bloodgroup">Bloodgroup:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="bloodgroup"
//               value={data.bloodGroup}
//               onChange={handleBloodgroupChange}
//               required
//             />
//           </div>
//           </div>
//          </div>

//          <div className="row">
//             <div className="col">
//               <div className="form-group">
//             <label htmlFor="chiefcomplaint">Chief Complaint:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="chiefcomplaint"
//               value={data.chiefcomplaint}
//               onChange={handleChiefcomplaintChange}
//               required
//             />
          
//           </div>
//           </div>
//             <div className="col">
//               <div className="form-group">
//             <label htmlFor="timeofregistration">AppointedTime:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="timeofregistration"
//               value={data.timeofregistration}
//               onChange={handleTimeofregistrationChange}
//               required
//             />
//           </div>
//           </div>
//           </div>
//           {/* <div className="row">
//             <div className="col">
//               <div className="form-group">
//             <label htmlFor="bloodpressure">BloodPressure:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="bloodpressure"
//               value={data.bloodpressure}
//               onChange={handleBloodpressureChange}
//               required
//             />
//           </div>
//           </div>
//             <div className="col">
//               <div className="form-group">
//             <label htmlFor="sugarlevel">SugarLevel:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="sugarlevel"
//               value={data.sugarlevel}
//               onChange={handleSugarlevelChange}
//               required
//             />
//           </div>
//           </div>
//           </div> */}
        
          
//           <div className="row">
//             <div className="col">
//               <div className="form-group">
//             <label htmlFor="address">Address:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="address"
//               value={data.address}
//               onChange={handleAddressChange}
//               required
//             />
//           </div>
//           </div>
        
//           <div className="col">
//               <div className="form-group">
//             <label htmlFor="testtype">Testtype:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="textarea"
//               value={data.testtype}
//               onChange={handleTesttypeChange}
//               required
//             />
//           </div>
//           </div>
//           </div>

//           <div className="row">
//             <div className="col">
//               <div className="form-group">
//             <label htmlFor="prescribe">Prescribe:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="prescribe"
//               value={data.passwordValidrescribe}
//               onChange={handlePrescribeChange}
//               required
//             />
//           </div>
//           </div>
//           </div>
         

//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={handleSubmit} type="submit">
//             Submit
//           </Button>
//           <Button color="secondary" onClick={onClose}>
//             Cancel
//           </Button>
//         </ModalFooter>
//       </div>
//     </Modal>
//   );
// };

// export default EditPatient;



import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
} from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import "react-phone-input-2/lib/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../admin/style.css"
import { MDBTextArea } from "mdb-react-ui-kit";
const imageMimeType = /image\/(jpg|jpeg)/i;


function EditModal({
  editModal,
  handleEdit,
  onClose,
  data,
  setData,
  existingImage,
}) {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  useEffect(() => {
    if (editModal) {
      setFileDataURL(existingImage ? URL.createObjectURL(existingImage) : null);
    }
  }, [editModal, existingImage]);

  const [formData, setFormData] = useState({
    title: "",
    image: null,
  });
  

  const [isValid, setIsValid] = useState({
    emailValid: false,
    phoneValid: false,
    nameValid: false,
  });
  

  const handleNameChange = (e) => {
    setData({ ...data, name: e.target.value });
  };
  

  const handleEmailChange = (e) => {
    if (/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(e.target.value)) {
      setIsValid({ ...isValid, emailValid: true });
    } else {
      setIsValid({ ...isValid, emailValid: false });
    }
    setData({ ...data, email: e.target.value });
  };

  const handlePhoneChange = (e) => {
    if (/[0-9^]{10}$/.test(e.target.value)) {
      setIsValid({ ...isValid, PhoneValid: true });
    } else {
      setIsValid({ ...isValid, PhoneValid: false });
    }
    setData({ ...data, phone: e.target.value });
  };

  const handleGenderChange = (e) => {
    const updatedFormData = { ...formData, gender: e.target.value };
    setFormData(updatedFormData);
    setData({ ...data, gender: e.target.value });
  };
  const handleChiefcomplaintChange = (e) => {
    const updatedFormData = { ...formData, chiefcomplaint: e.target.value };
    setFormData(updatedFormData);
    setData({ ...data, chiefcomplaint: e.target.value });
  };
  const handleAgeChange = (e) => {
    const updatedFormData = { ...formData, age: e.target.value };
    setFormData(updatedFormData);
    setData({ ...data, age: e.target.value });
  };
  const handleBloodgroupChange = (e) => {
    const updatedFormData = { ...formData, bloodgroup: e.target.value };
    setFormData(updatedFormData);
    setData({ ...data, bloodgroup: e.target.value });
  };
  const handleTimeChange = (e) => {
    const updatedFormData = { ...formData, timeofregistration: e.target.value };
    setFormData(updatedFormData);
    setData({ ...data, timeofregistration: e.target.value });
  };
  const handleAddressChange = (e) => {
    const updatedData = { ...data, address: e.target.value };
    setData(updatedData);
    const updatedFormData = { ...formData, address: e.target.value };
    setFormData(updatedFormData);
  };
  const handleTextAreaChange = (e) => {
    const updatedFormData = { ...formData, testtype: e.target.value };
    setFormData(updatedFormData);
    setData({ ...data, testtype: e.target.value });
  };
  
  const Gender = [
    { label: "Male"},
    { label: "Female"},
    { label: "Other" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("jj");
    let formData = new URLSearchParams();;
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("gender", data.gender);
    formData.append("chiefcomplaint", data.chiefcomplaint);
    formData.append("age", data.age);
    formData.append("bloodgroup", data.bloodgroup);
    formData.append("timeofregistration", data.timeofregistration);
    formData.append("address", data.address);
    formData.append("testtype", data.testtype);

    const config = {
      headers: { 
        "Content-Type": "application/x-www-form-urlencoded",
        auth: localStorage.getItem("access_token") },
    };
    axios
      .put(
        `http://localhost:3000/api/hbms/update_patform/${data.id}`,
        formData,
        config
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          onClose();
          setData({
            name: "",
            email: "",
            phone: "",
            gender: "",
            chiefcomplaint: "",
            age: "",
            bloodgroup: "",
            timeofregistration: "",
            address: "",
            testtype: "",
          });
          // setData("");
          // setData("");
          // setData("");
          // setData("");
          // setData("");
          // setData("");
          // setData("");
          // setData("");
          // setData("");
          toast.success("Record is successfully updated");
        } else {
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal
      isOpen={editModal}
      toggle={handleEdit}
      centered
      className="modal-right"
    >
      <ModalHeader toggle={handleEdit} onClick={() => onClose()}>
        Updating User
      </ModalHeader>
      <form className="container" onSubmit={handleSubmit}>
        <ModalBody>
          <div className="row">
            <div className="col-md-6">
              <Label>
                Name:
                <input
                  type="text"
                  value={data.name}
                  name="name"
                  onChange={handleNameChange}
                  required
                />
              </Label>
            </div>
            <div className="col-md-6" style={{ marginTop: "25px" }}>
              <Label>
                Gender:
                 <select value={data.gender} onChange={handleGenderChange} required>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </Label>
            </div>
          </div>
          <div className="row">
           <div className="col-md-6" >
              <Label>
                Chief Complaint:
                <input
                  type="text"
                  value={data.chiefcomplaint}
                  required
                  onChange={handleChiefcomplaintChange}
                />
              </Label>
            </div>
            <div className="col-md-6">
              <Label>
                Age:
                <input
                  type="text"
                  value={data.age}
                  onChange={handleAgeChange}
                  required
                />
              </Label>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Label>
                Blood Group:
                <input
                  type="text"
                  value={data.bloodgroup}
                  required
                  onChange={handleBloodgroupChange}
                />
              </Label>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Label>
                Prescribe:
                <MDBTextArea
                  value={data.testtype}
                  onChange={handleTextAreaChange}
                  labelClass="col-form-label"
                />
              </Label>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit">
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={() => onClose()}>
            Cancel
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
}
export default EditModal;