import "./../App.css";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <div className="Contact">
      <Stack spacing={2} direction="column">
        <Typography variant="h4" gutterBottom>
          Contact us
        </Typography>
        <Typography variant="body1" gutterBottom>
          If you have any feedback or questions, feel free to email us by
          clicking the button below and filling out the fields. We will get in
          contact with you between 1-3 business days. We're only human so be
          patient mf 😂
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Button
            id="email-button"
            variant="contained"
            onClick={() => window.open("mailto:budgyhelp@gmail.com")}
          >
            Email us
          </Button>
        </Box>
      </Stack>
    </div>
  );
}

export default Contact;
