import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "./Login.css";
import Routes from "./Components/Routes";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Routes />
      </div>
    );
  }
}
export default App;
