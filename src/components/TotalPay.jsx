import { Box, Grid, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

export default function TotalPay() {
  const [values, setValues] = useState({
    amount: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: 118 },
        }}
      >
        <Grid container direction="column" columns={1} spacing={2}>
          <TextField
            id="total-pay"
            sx={{ width: 135 }}
            name="totalpay"
            type="number"
            variant="outlined"
            label="Total Pay"
            placeholder="e.g Total income"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            value={values.amount}
            onChange={handleChange("amount")}
          />
        </Grid>
      </Box>
    </div>
  );
}
