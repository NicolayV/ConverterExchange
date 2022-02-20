import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Header from "../Header";
import SideBar from "../SideBar";
import { styles } from "./style";

const Layout = ({ children }) => {
  return (
    <Box sx={styles.layout}>
      <CssBaseline />
      <Header />
      <SideBar />
      <Box component="main" sx={styles.mainContent}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
