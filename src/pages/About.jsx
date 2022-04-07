import "./../App.css";
import React from "react";
import { Box, Stack, Typography } from "@mui/material";

function About() {
  return (
    <div className="About">
      <Stack spacing={2} direction="column">
        <Typography variant="h4" gutterBottom>
          What is Budgy?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Budgy is a user-friendly budgeting app that aims to help fellow kiwis
          budget and get their shit together! 😂😂😂😂😂
        </Typography>
        <Typography variant="h5" gutterBottom>
          Our story
        </Typography>
        <Typography variant="body1" gutterBottom>
          Budgeting has been a key driver in achieving our financial goals! A
          good budget gave us visibility of where our money was going which
          helped us set targets, and smash them! I got bored one day and tried
          to build an app that would help me budget easily! Moving away from
          writing it on paper and becoming eco-friendly, it is only right to
          store our budget info on the web.
        </Typography>
        <Typography variant="h5">How to use it</Typography>
        <Typography variant="subtitle2" gutterBottom>
          The goal is to enter your total pay, frequency, expenses, and then hit
          calculate to see how much $$ you are left with. From there you can
          then save the budget as a pdf. Refer to the below video on the proper
          way to use this app.
        </Typography>
        <Box
          component="img"
          sx={{
            width: 500,
            mr: 2,
            display: { xs: "none", md: "flex", lg: "flex" },
          }}
          alt="Budgy"
          src="/BudgyApp/images/Budgy.gif"
        />
        <Box
          component="img"
          sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
          alt="Budgy"
          src="/BudgyApp/images/Budgy.gif"
        />
      </Stack>
    </div>
  );
}

export default About;
