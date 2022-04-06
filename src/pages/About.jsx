import "./../App.css";
import React from "react";
import Typography from "@mui/material/Typography";

function About() {
  return (
    <div className="About">
      <Typography variant="h3" gutterBottom>
        What is Budgy?
      </Typography>
      <Typography variant="body1" gutterBottom>
        Budgy is a user-friendly budgeting app that aims to help fellow kiwis
        budget and get their shit together! 😂😂😂😂😂
      </Typography>
      <Typography variant="h4" gutterBottom>
        Our story
      </Typography>
    </div>
  );
}

export default About;
