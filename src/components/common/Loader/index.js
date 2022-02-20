import React from "react";
import Stack from "@mui/material/Stack";
import { CircularProgress } from "@mui/material";

const CircularIndeterminate = () => {
  return (
    <Stack sx={{ m: 4, color: "grey.500" }} spacing={2}>
      <CircularProgress color="inherit" />
    </Stack>
  );
};
export default CircularIndeterminate;
