import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

export default function Frequency() {
  const [frequency, setFrequency] = useState("");

  const handleChange = (event) => {
    setFrequency(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: 142 },
      }}
    >
      <FormControl sx={{ m: 1, width: "16ch" }}>
        <InputLabel id="pay-frequency">Frequency</InputLabel>
        <Select
          labelId="frequency"
          id="pay-frquency"
          value={frequency}
          label="Frequency"
          onChange={handleChange}
        >
          <MenuItem value={"Weekly"}>Weekly</MenuItem>
          <MenuItem value={"Fortnightly"}>Fortnightly</MenuItem>
          <MenuItem value={"Monthly"}>Monthly</MenuItem>
          <MenuItem value={"Yearly"}>Yearly</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
