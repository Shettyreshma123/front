import React from 'react';
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import LoginUser from './pages/LoginUser';
import LoginForm from "./pages/LoginForm";
import ForgetPasswordForm from "./pages/ForgetPasswordForm";
import Doctor from "./component/doctor/Doctor";
import Admin from "./component/admin/Admin";
import Nurse from "./component/nurse/Nurse";
import Receptionist from "./component/receptionist/Receptionist";
import Patient from "./component/patient/Patient"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PatientForm from './pages/PatientForm';
import Report from './component/receptionist/Report'
// import LoginUser from './pages/LoginUser';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/loginuser" element={<LoginUser/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<LoginForm />} />
          <Route  path="/reset-password" element={<ForgetPasswordForm/>} />
          <Route path="/patientform" element={<PatientForm/>} />
          <Route  path="/patient" element={<Patient/>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/nurse" element={<Nurse />} />
          <Route path="/receptionist" element={<Receptionist />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
