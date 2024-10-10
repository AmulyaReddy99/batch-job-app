import React, { Suspense, useState } from "react";
import {  Route, Routes } from "react-router-dom";

import "./index.scss";

import Header from "./Components/Header";
import Loader from "./Components/Loader";
import NotFound from "./Components/NotFound";
import Menu from "./Components/Menu";

const RemoteMonitoringApp = React.lazy(() => import("monitoring/MonitoringApp"));
const RemoteOnboardingApp = React.lazy(() => import("onboarding/OnboardingApp"));

const App = () => {
  const [ loading, setLoading ] = useState(false);
  return <div>
  <Header />
  <Menu
    onboardingApp={<RemoteOnboardingApp/>}
    monitoringApp={<RemoteMonitoringApp/>}
  />
 </div>
};

export default App