import React from "react";
import Layout from "../component/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 ,fontSize:"3.5rem" } }}>
        <Typography variant="h4">Contact Us</Typography>
        <p>
          We're here to provide you with the best possible care and support. If
          you have any questions or concerns, please feel free to reach out to
          us using the contact details below. Our dedicated team is ready to assist
          you.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> infomediface@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 123-456-7890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;



// import React from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import Layout from "./../components/Layout/Layout";
// import { Box, Typography } from "@mui/material";

// const Contact = () => {
//   const mapContainerStyle = {
//     width: "100%",
//     height: "400px",
//   };

//   const center = {
//     lat: 13.0818611,
//     lng: 74.9986389,
//   };

//   return (
//     <Layout>
//       <Box>
//         <Typography variant="h4">Contact Us</Typography>

//         {/* Map */}
//         <LoadScript googleMapsApiKey="https://www.google.com/maps/@13.0818611,74.9986389,17z">
//           <GoogleMap
//             mapContainerStyle={mapContainerStyle}
//             center={center}
//             zoom={17} // Adjust zoom level as needed
//           >
//             <Marker position={center} />
//           </GoogleMap>
//         </LoadScript>

//         {/* Contact information */}
//         <Box sx={{ mt: 4 }}>
//           <Typography>Contact Information:</Typography>
//           {/* Add your contact information here */}
//         </Box>
//       </Box>
//     </Layout>
//   );
// };

// export default Contact;
