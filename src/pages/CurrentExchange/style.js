export const styles = {
  form: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    padding: "10px",

    fontSize: 24,
  },
  button: {
    marginLeft: "10px",
    maxHeight: "57px",
  },

  typography: { m: 4 },

  mainContent: {
    display: "flex",
    flexWrap: "wrap",
    "& > :not(style)": {
      m: 1,
      width: 600,
      minHeight: 500,
    },
  },
};
