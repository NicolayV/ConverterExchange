import React from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { navbarListItems } from "./const";
import { styles } from "./style";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <Drawer sx={styles.drawer} variant="permanent" anchor="left">
      <Toolbar />
      <Divider />
      <List>
        {navbarListItems.map((item) => (
          <ListItem button key={item.id} onClick={() => navigate(item.route)}>
            <ListItemIcon sx={styles.icons}>{item.icon}</ListItemIcon>
            <ListItemText sx={styles.text} primary={item.label} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};
export default SideBar;
