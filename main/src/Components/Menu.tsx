import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Loader from "./Loader";

const grid = 8;

function Menu({ onboardingApp, monitoringApp }) {
  const [state, setState] = useState();
  return (
    <div className="container-fluid">
        <div className="row flex-nowrap" style={{display: 'flex'}}>
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <a href="/" className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Job Monitoring</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/app-onboarding" className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">App Onboarding</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col py-3">
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route  path="/app-onboarding/*" element={onboardingApp}/>
                        <Route  path="/*" element={monitoringApp}/>
                        <Route path="*" element={<NotFound />}/>
                    </Routes>
                </Suspense>
            </div>
        </div>
    </div>
  );
}

export default Menu;