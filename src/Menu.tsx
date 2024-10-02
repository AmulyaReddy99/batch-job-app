import React, { useState } from "react";
import ReactDOM from "react-dom";
import BatchJobMonitoring from "./BatchJobMonitoring";

const grid = 8;

function Menu() {
  const [state, setState] = useState();

  return (
    <div className="container-fluid">
        <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <a href="#" className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Job Monitoring</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Onboaring</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col py-3">
                <BatchJobMonitoring />
            </div>
        </div>
    </div>
  );
}

export default Menu;