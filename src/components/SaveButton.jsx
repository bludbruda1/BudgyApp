import { Box, Button } from "@mui/material";
import React from "react";

export default function SaveButton() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Button
        onClick={() => window.print()}
        id="submit-entry"
        variant="contained"
        color="primary"
      >
        Save Budget
      </Button>
    </Box>
  );
}
