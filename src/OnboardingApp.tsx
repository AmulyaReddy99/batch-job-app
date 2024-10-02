import React, { useState } from "react";
import ReactDOM from "react-dom";
import Menu from "./Menu";

function OnboardingApp() {
  return (
    <div>
      <nav className="navbar" style={{backgroundColor: "#001aff"}}>
        <a className="navbar-brand" href="#">
          <img src={require('./assets/logo.png')} height={40} style={{paddingLeft: '20px'}}/>
        </a>
      </nav>
      <Menu />
      </div>
  );
}

export default OnboardingApp;