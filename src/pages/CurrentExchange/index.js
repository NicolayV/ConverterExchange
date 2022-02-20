import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Box, List, ListItem, Paper } from "@mui/material";
import { getLatestRates } from "../../api";

import CircularIndeterminate from "../../components/common/Loader";
import AutocompleteInput from "../../components/common/Autocomplete";
import BasicSnackbar from "../../components/common/Snackbar";
import { styles } from "./style";

const CurrentExchange = () => {
  const [currentItem, setCurrentItem] = useState("");
  const [dataList, setDataList] = useState([]);

  const { data, error, isLoading } = useQuery("LatestRates", getLatestRates);
  const currentExchange = data?.data ? Object.entries(data.data.rates) : [];

  useEffect(() => {
    if (data && currentItem) {
      const arr = Object.entries(data.data.rates);
      const filter = arr.filter((v) => v[0] === currentItem);
      const filteredList = arr.map(
        (item) => (item = [item[0], (item[1] * filter[0][1]).toFixed(2)])
      );
      setDataList(filteredList);
    }
  }, [data, currentItem]);

  return (
    <Box>
      {isLoading ? (
        <CircularIndeterminate dataList={dataList} />
      ) : (
        <Box sx={styles.mainContent}>
          <Paper elevation={3}>
            <Box sx={styles.form}>
              <AutocompleteInput
                items={currentExchange}
                currentItem={setCurrentItem}
              />
            </Box>

            <Box>
              <List>
                {dataList.map(
                  (item) =>
                    (item = (
                      <ListItem key={item[0]}>
                        {" "}
                        {item[0]} = {item[1]}
                      </ListItem>
                    ))
                )}
              </List>
            </Box>
          </Paper>

          <BasicSnackbar
            open={error}
            message={"An error has occurred: " + error?.message}
          />
        </Box>
      )}
    </Box>
  );
};

export default CurrentExchange;
