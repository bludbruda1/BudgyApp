import "./App.css";
import React from "react";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Stack from "@mui/material/Stack";
import ResponsiveAppBar from "./components/AppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
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
              <Route path={"/BudgyApp/"} element={<Homepage />}></Route>
              <Route path={"/BudgyApp/about"} element={<About />}></Route>
              <Route path={"/BudgyApp/contact"} element={<Contact />}></Route>
            </Routes>
          </Stack>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
