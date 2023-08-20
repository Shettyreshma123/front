import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { FaUserMd } from "react-icons/fa";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useState } from "react";
import PeopleIcon from "@mui/icons-material/People";
// import DescriptionIcon from "@mui/icons-material/Description";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CancelIcon from "@mui/icons-material/Cancel";
import { FaUserNurse} from "react-icons/fa";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import SendIcon from "@mui/icons-material/Send";

import Profile from "./Profile";
import AddStaff from "../admin/AddStaff";
import TestRequest from "./TestRequest";
import BloodTest from "./BloodTest";
import UrineTest from "./UrineTest";
import BloodPressureTest from "./BPTest";
import BloodSugarTest from "./SugarlevelTest";






const drawerWidth = 240;

const buttonStyles = {
  width: "100%",
  color: "black",
  borderRadius: "10px",
  backgroundColor: "whitesmoke",
  "&:hover": {
    backgroundColor: "lightblue",
  },
};
const iconStyles = {
  fontSize: "1.5rem",
};

const drawerHeaderStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px",
};

const mainContentStyles = {
  flexGrow: 1,
  p: 3,
  width: { sm: `calc(100% - ${drawerWidth}px)` },
};

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate();

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handlePatient = (role) => {
    setSelectedRole(role);
    if (role === "Logout") {
      handleLogout();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  const fieldColors = {
    
    Patients: "#4CAF50",
   
    Profile: "#FFC107",
    Logout: "#F44336",
  };

  const getIconColor = (field) => {
    return fieldColors[field] || "#000000"; // Default color if field color is not defined
  };

  const drawer = (
    <div>
      <Toolbar />
      {/* <div sx={drawerHeaderStyles}>
        <FaUserMd sx={{ marginRight: "0.5rem", fontSize: "2rem" }} />
        <Typography variant="h6">Doctor Dashboard</Typography>
      </div> */}
      {/* <List> */}
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          marginLeft: "16px",
          marginRight: "16px",
        }}
      >
        {[
        //   { text: "Prescriptions", iconComponent: <DescriptionIcon />, role: "Prescriptions" },
          
          { text: "TestRequest", iconComponent: <LocalHospitalIcon style={{ color: "#FF5722" }} />, role: "TestRequest" },
          // { text: "Patient", iconComponent: <PeopleIcon />, role: "Patients" },
          {
            text: "BloodTest",
            iconComponent: <BloodtypeIcon />,
            role: "BloodTest",
          },
          {
            text: "BloodPressureTest",
            iconComponent: <BloodtypeIcon />,
            role: "BloodPressureTest",
          },
          {
            text: "BloodSugarTest.",
            iconComponent: <BloodtypeIcon />,
            role: "BloodSugarTest",
          },
          {
            text: "UrineTest",
            iconComponent: <BloodtypeIcon />,
            role: "UrineTest",
          },
          // {
          //   text: "Patients",
          //   iconComponent: <SendIcon />,
          //   role: "Patients",
          // },
          { text: "Profile", iconComponent: <AccountCircleIcon />, role: "Profile" },
          { text: "Logout", iconComponent: <LogoutIcon />, role: "Logout" },
        ].map(({ text, iconComponent, role }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                ...buttonStyles,
                "& .MuiListItemIcon-root": {
                  color: getIconColor(role),
                },
              }}
              onClick={() => handlePatient(role)}
            >
              <ListItemIcon>{iconComponent}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "whitesmoke",
          color: "black",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <FaUserNurse sx={{ marginRight: "0.5rem" }} />
            NURSE
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          bgcolor: "whitesmoke",
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-Paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-Paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={mainContentStyles}>
        <Toolbar />
		{selectedRole === "Profile" ? (
          <Profile />
         ): selectedRole === "TestRequest" ? (
          <TestRequest />
          ):selectedRole=== "BloodTest" ? (
            <BloodTest />
          ) 
          : selectedRole === "UrineTest" ? (
            <UrineTest />
          ) 
          : selectedRole === "BloodPressureTest" ? (
            <BloodPressureTest />
          ) 
          : selectedRole === "BloodSugarTest" ? (
            <BloodSugarTest />
           
         
        ) : (
          <>
            {!selectedRole && (
              <>
                <Typography paragraph></Typography>
                <AddStaff />
             </> 
             )}
          </>
        )}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;



