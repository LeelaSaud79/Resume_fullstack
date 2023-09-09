import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Cv from "./cv.jsx";
import Login from "./Login";
function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/cv" element={<Cv />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>

  )
}
export default App;

