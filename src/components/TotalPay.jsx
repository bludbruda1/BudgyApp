import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import React from "react";

export default function TotalPay() {
  const [values, setValues] = React.useState({
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
          "& > :not(style)": { m: 1, width: 130 },
        }}
      >
        <Grid container direction="column" columns={1} spacing={2}>
          <TextField
            id="total-pay"
            sx={{ width: 150 }}
            name="totalpay"
            type="number"
            variant="outlined"
            label="Total Pay"
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
