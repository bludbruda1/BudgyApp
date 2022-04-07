import "./App.css";
import React from "react";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Stack from "@mui/material/Stack";
import ResponsiveAppBar from "./components/AppBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />

      <div
        className="content"
        style={{
          paddingTop: "25px",
          paddingLeft: "25px",
          paddingBottom: "25px",
          paddingRight: "25px",
        }}
      >
        <Stack spacing={2}>
          <Routes>
            <Route exact path="/" element={<Homepage />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
        </Stack>
      </div>
    </div>
  );
}

export default App;
