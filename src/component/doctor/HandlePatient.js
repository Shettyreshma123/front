import React, { useEffect, useState } from "react";
import axios from "axios";
import { IconButton } from "@mui/material";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import { ToastContainer, toast } from "react-toastify";
import EditModal from "./EditPatient";

import { FaRegEdit, FaTrash } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";
import jwtDecode from "jwt-decode";
import PatientDetailsModal from "./PatientDetails";
import "./style.css";


function HandlePatient() {
  const [patients, setPatients] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [editModal, setEditModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [doctorId, setDoctorId] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null); 
  const [patientDetailsModalOpen, setPatientDetailsModalOpen] = useState(false); 
  const [data, setData] = useState({
    id: "",
    username: "",
    email: "",
    phone: "",
    gender: "",
    age: "",
    chiefcomplaint: "",
    bloodgroup: "",
    timeofregistration: "",
    address: "",
    testtype: "",
  });

  const header = {
    headers: {
      auth: localStorage.getItem("access_token"),
    },
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); 
  };

  const tableContainerStyle = {
    width: "100%",
    maxWidth: "400px",
    border: "1px solid black",
    overflow: "auto",
  };

 

  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete this user?")) {
      axios({
        url: `http://localhost:3000/api/hbms/delete_patient/${id}`,
        method: "delete",
        headers: {
          auth: localStorage.getItem("access_token"),
        },
      })
        .then((res) => {
          console.log(res);
          toast.success("Item deleted successfully!");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
    setPatientDetailsModalOpen(true);
  };

  function handleEdit(
    id,
    name,
    email,
    phone,
    gender,
    chiefcomplaint,
    age,
    bloodgroup,
    timeofregistration,
    address,
    testtype,
  ) {
    setEditModal(true);
    setData({
      ...data,
      id: id,
      name: name,
      email: email,
      phone: phone,
      gender: gender,
      chiefcomplaint: chiefcomplaint,
      age: age,
      bloodgroup: bloodgroup,
      timeofregistration: timeofregistration,
      address: address,
      testtype: testtype,
    });
  }

  const handleAdd = () => {
    setAddModal(true); // Show the "Add" modal
  };

 

  const fetchDoctorId = () => {
    const token = localStorage.getItem("access_token");
    if (token) {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      setDoctorId(decodedToken.user_id);
    }
  };
  useEffect(() => {
    fetchDoctorId();
  }, []);

  useEffect(() => {
    if (doctorId) {
      axios
        .get("http://localhost:3000/api/hbms/view_patform", header)
        .then((response) => {
          const responseData = response.data;
          const filteredPatients = responseData.filter(
            (patient) => patient.doctorId === doctorId
          );
          console.log(filteredPatients);
          setPatients(filteredPatients);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [doctorId]);
  
  
 

  return (
    <div sx={tableContainerStyle}>
      <TableContainer component={Paper}>
      {/* <button onClick={handleAdd} className="bu1">
          Add Patients
        </button> */}
        <Table>
          <TableHead sx={{ backgroundColor: "black" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Name</TableCell>
              <TableCell sx={{ color: "white" }}>Email</TableCell>
              <TableCell sx={{ color: "white" }}>Phone</TableCell>
              <TableCell sx={{ color: "white" }}>Gender</TableCell>
              <TableCell sx={{ color: "white" }}>Chief Complaint</TableCell>
              <TableCell sx={{ color: "white" }}>Age</TableCell>
              <TableCell sx={{ color: "white" }}>Bloodgroup</TableCell>
              <TableCell sx={{ color: "white" }}>
                AppointedTime
              </TableCell>
              <TableCell sx={{ color: "white" }}>Address</TableCell>
              <TableCell sx={{ color: "white" }}>testtype</TableCell>
              <TableCell sx={{ color: "white" }}>Prescribe</TableCell>
              <TableCell sx={{ color: "white" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient, index) => (
              <TableRow key={index}>
                 <TableCell>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => handlePatientClick(patient)} 
                  >
                    {patient.username}
                  </span>
                </TableCell>
                <TableCell>{patient.email}</TableCell>
                <TableCell>{patient.phone}</TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell>{patient.chiefcomplaint}</TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.bloodgroup}</TableCell>
                <TableCell>{patient.timeofregistration}</TableCell>
                <TableCell>{patient.address}</TableCell>
                <TableCell>{patient.testtype}</TableCell>
                <TableCell>{patient.Prescribe}</TableCell>
                <TableCell>
                   <button
                    className="btn-st prescriptions-button"
                    style={{
                      marginRight: "15px",
                      backgroundColor: "blue", // Set the background color
                      color: "white", // Set the text color
                      padding: "5px 10px", // Set padding for the button
                      borderRadius: "5px",
                    }}
                    onClick={() =>
                      handleEdit(
                        patient.id,
                        patient.username,
                        patient.email,
                        patient.phone,
                        patient.gender,
                        patient.chiefcomplaint,
                        patient.age,
                        patient.bloodgroup,
                        patient.timeofregistration,
                        patient.address,
                        patient.testtype,
                      )
                    }
                  >
                    <AiOutlineFileText/>
                    </button>
          <button
            className="btn-st delete-button"
            onClick={() => handleDelete(patient.row.id)}
          >
            <FaTrash />
          </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PatientDetailsModal
        open={patientDetailsModalOpen}
        onClose={() => setPatientDetailsModalOpen(false)}
        patient={selectedPatient}
      />
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={patients.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
      <EditModal
        editModal={editModal}
        handleEdit={handleEdit}
        onClose={() => setEditModal(false)}
        data={data}
        setData={setData}
      />
    </div>
  );
}

export default HandlePatient;