import React, { useState } from "react";
import ReactDOM from "react-dom";
import { getListStyle, getItems } from "./util";
import Menu from "./Menu";

const grid = 8;

function OnboardingApp() {
  const [state, setState] = useState([
    getItems(10, 'Todo'), 
    getItems(5, 'Inporgress', 10), 
    getItems(1, 'Completed', 15, '#e6fff3'), 
    getItems(1, 'Failed', 16, '#ffe6e6')
  ]);
  const [offset, setOffset] = useState(16);

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