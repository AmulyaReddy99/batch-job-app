import React, { Component } from "react";
import OnboardingApp from "./OnboardingApp";

const grid = 8;
class App extends Component {
  constructor(props) {
    super(props);
  
  }

  render() {
    return (
      <OnboardingApp />
    );
  }
}

export default App;