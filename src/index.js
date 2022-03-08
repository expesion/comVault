import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/details/:id/:name/:ipAddress/:operatingSystem/:softwareVersion"
        element={<Details />}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
