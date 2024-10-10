import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.scss";
import AppOnboarding from "./Components/AppOnboarding";

const App = () => {
  return <Routes>
   <Route path="/" element={<AppOnboarding />}/> 
 </Routes>
};

export default App;

