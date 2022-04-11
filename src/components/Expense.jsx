import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import { createMedia } from "@artsy/fresnel";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});

export default function Expense() {
  const [valuesList, setValueList] = useState([
    {
      expense: "",
    },
  ]);

  const handleValuesAdd = () => {
    setValueList([
      ...valuesList,
      {
        expense: "",
      },
    ]);
  };

  const handleValuesRemove = (index) => {
    const list = [...valuesList];
    list.splice(index, 1);
    setValueList(list);
  };

  const handleValuesChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...valuesList];
    list[index][name] = value;
    setValueList(list);
  };

  return (
    <MediaContextProvider>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: 350 },
        }}
      >
        {valuesList.map((singleExpense, index) => (
          <div key={index} className="expenses">
            <Stack spacing={2} direction="row">
              <Media lessThan="lg">
                <Grid container direction="column" columns={1} spacing={2}>
                  <Grid item>
                    <Stack spacing={2} direction="column">
                      <TextField
                        name="expense-type"
                        placeholder="e.g Groceries"
                        variant="outlined"
                        label="Expense"
                        sx={{ width: 200 }}
                        onChange={(e) => handleValuesChange(e, index)}
                      />
                    </Stack>
                  </Grid>
                  <Grid item>
                    <Stack spacing={1} direction="row">
                      <TextField
                        sx={{ width: 200 }}
                        name="expense"
                        type="number"
                        variant="outlined"
                        label="Amount"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">$</InputAdornment>
                          ),
                        }}
                        value={singleExpense.expense}
                        onChange={(e) => handleValuesChange(e, index)}
                      />
                      {valuesList.length > 1 && (
                        <IconButton
                          aria-label="delete"
                          onClick={() => handleValuesRemove(index)}
                        >
                          <DeleteIcon />{" "}
                        </IconButton>
                      )}
                    </Stack>
                  </Grid>
                  <Grid item>
                    <Stack spacing={2} direction="row">
                      {valuesList.length - 1 === index && (
                        <IconButton
                          aria-label="add"
                          color="primary"
                          onClick={handleValuesAdd}
                        >
                          <AddIcon />
                        </IconButton>
                      )}
                    </Stack>
                  </Grid>
                </Grid>
              </Media>
              <Media greaterThanOrEqual="lg">
                <Grid container direction="column" columns={1} spacing={2}>
                  <Stack spacing={2} direction="row">
                    <TextField
                      variant="outlined"
                      label="Expense"
                      placeholder="e.g Groceries"
                    />
                    <TextField
                      name="expense"
                      type="number"
                      variant="outlined"
                      label="Amount"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">$</InputAdornment>
                        ),
                      }}
                      value={singleExpense.expense}
                      onChange={(e) => handleValuesChange(e, index)}
                    />
                    {valuesList.length > 1 && (
                      <IconButton
                        aria-label="delete"
                        onClick={() => handleValuesRemove(index)}
                      >
                        <DeleteIcon />{" "}
                      </IconButton>
                    )}
                  </Stack>
                  <Grid item>
                    <Stack spacing={2} direction="row">
                      {valuesList.length - 1 === index && (
                        <IconButton
                          aria-label="add"
                          color="primary"
                          onClick={handleValuesAdd}
                        >
                          <AddIcon />
                        </IconButton>
                      )}
                    </Stack>
                  </Grid>
                </Grid>
              </Media>
            </Stack>
          </div>
        ))}
      </Box>
    </MediaContextProvider>
  );
}
