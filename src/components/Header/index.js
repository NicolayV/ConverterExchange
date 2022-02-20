import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styles } from "./style";

const headerText = "Приложение для конвертации валют";

const Header = () => {
  return (
    <AppBar position="fixed" sx={styles.appBar}>
      <Toolbar>
        <Typography variant="h5" noWrap component="div">
          {headerText}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
