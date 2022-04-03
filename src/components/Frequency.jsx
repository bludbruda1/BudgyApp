import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Frequency() {
  const [frequency, setFrequency] = React.useState("");

  const handleChange = (event) => {
    setFrequency(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, width: "15ch" }}>
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
