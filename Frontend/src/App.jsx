import React from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Topbar from "./Components/Layout/Topbar/Topbar";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      {/* <Login /> */}
      <Topbar />
    </>
  );
}

export default App;
