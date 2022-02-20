import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const AutocompleteInput = ({ items, currentItem }) => {
  return (
    <Autocomplete
      onChange={(event, newValue) => {
        currentItem(newValue);
      }}
      id="controllable"
      options={items.map((item) => item[0])}
      sx={{ width: 600 }}
      renderInput={(params) => <TextField {...params} label="Базовая валюта" />}
    />
  );
};
export default AutocompleteInput;
