import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.scss";
import BatchJobMonitoring from "./Components/BatchJobMonitoring";

const App = () => {
  return <Routes>
   <Route path="/" element={<BatchJobMonitoring />}/>
 </Routes>
};

export default App;

