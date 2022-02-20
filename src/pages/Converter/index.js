import React, { useEffect, useState } from "react";
import { getExchangeRate } from "../../api";
import Paper from "@mui/material/Paper";
import SendIcon from "@mui/icons-material/Send";
import { styles } from "./style";
import validation from "../../utils/validation";
import { useMutation } from "react-query";
import CircularIndeterminate from "../../components/common/Loader";
import { Box, Button, TextField, Typography } from "@mui/material";
import BasicSnackbar from "../../components/common/Snackbar";
import useInput from "../../hooks/useInput";

const Converter = () => {
  const inputField = useInput("");
  const [errorInput, setErrorInput] = useState(false);
  const [inputErrorText, setInputErrorText] = useState(
    "Введите текст в формате 10 rub in usd"
  );
  const [currencyData, setCurrencyData] = useState({
    value: "",
    current: "",
    exchange: "",
  });
  const [currencyResult, setCurrencyResult] = useState("");

  const { mutate, error, isLoading } = useMutation(
    () => getExchangeRate(currencyData.exchange, currencyData.current),
    {
      onSuccess: ({ data }) => {
        if (Object.keys(data.rates).length === 1) {
          return console.log("Ввели не верную валюту");
        }
        const result =
          (currencyData.value / data.rates[currencyData.current]) *
          data.rates[currencyData.exchange];

        setCurrencyResult(
          `${currencyData.value} ${currencyData.current} in ${
            currencyData.exchange
          } = ${result.toFixed(2)} ${currencyData.exchange}`
        );
      },
    }
  );

  useEffect(() => {
    currencyData.value
      ? mutate()
      : setCurrencyResult("Результатов конвертации нет");
  }, [currencyData.value, mutate]);

  const handleFocus = () => {
    setErrorInput(false);
    setInputErrorText("Введите текст в формате 10 rub in usd");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = inputField.value
      .split(" ")
      .filter((item) => !!item === true);

    validation(result, setErrorInput, setInputErrorText, setCurrencyData);
  };

  return (
    <Box>
      {isLoading ? (
        <CircularIndeterminate />
      ) : (
        <Box sx={styles.mainContent}>
          <Paper elevation={3}>
            <Box onSubmit={handleSubmit} component="form" sx={styles.form}>
              <TextField
                {...inputField}
                error={errorInput}
                helperText={inputErrorText}
                onFocus={handleFocus}
                label="Конвертер"
                fullWidth
              />
              <Button type="Submit" variant="outlined" sx={styles.button}>
                <SendIcon />
              </Button>
            </Box>

            <Typography sx={styles.typography} variant="body1" component="div">
              {currencyResult}
            </Typography>
          </Paper>

          <BasicSnackbar
            severity={"error"}
            message={"An error has occurred: " + error?.message}
          />
        </Box>
      )}
    </Box>
  );
};

export default Converter;
