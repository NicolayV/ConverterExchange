const drawerWidth = 320;

export const styles = {
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",

      backgroundColor: "#90caf9",
      color: "#0d47a1",
    },
  },

  icons: {
    color: "rgba(255, 255, 255, 0.7)!important",
    marginLeft: "20px",
  },

  text: {
    "& span": {
      marginLeft: "-10px",
      fontWeight: "600",
      fontSize: "16px",
    },
  },
};
