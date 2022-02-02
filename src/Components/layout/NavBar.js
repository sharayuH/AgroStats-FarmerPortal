import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import logo from "../../images/logo-farm-2.png";
import { Button } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav className="nav-top">
            <Link to="/home" id="header-logo">
              <img src={logo} alt="Logo" />
            </Link>
            <Link to="/home" id="header-farm">
              <span>AgroStats</span>
            </Link>
            {/* <Link to="/login" style={{ textDecoration: "none" }}>
              <Button className="nav-button" variant="success">
                <b>Sign Up</b>
              </Button>
            </Link> */}
          </nav>
        </div>
        {/* <hr /> */}
        <nav className="nav-main">
          <ul className="nav-sub1">
            <Link to="/home" style={{ textDecoration: "none",color:"rgb(32, 59, 36)",fontFamily: "cursive" }}>
              <li>Home</li>
            </Link>
            <Link to="/schemes" style={{ textDecoration: "none",color:"rgb(32, 59, 36)",fontFamily: "cursive" }}>
              <li>Schemes</li>
            </Link>
            <Link to="/msp" style={{ textDecoration: "none",color:"rgb(32, 59, 36)",fontFamily: "cursive" }}>
              <li>MSP</li>
            </Link>
            <Link to="crop-pattern" style={{ textDecoration: "none",color:"rgb(32, 59, 36)",fontFamily: "cursive" }}>
              <li>Crop Pattern</li>
            </Link>
            <Link to="news-and-tech" style={{ textDecoration: "none",color:"rgb(32, 59, 36)",fontFamily: "cursive" }}>
              <li>News and Tech</li>
            </Link>
            <Link to="/calculator" style={{ textDecoration: "none",color:"rgb(32, 59, 36)",fontFamily: "cursive" }}>
              <li>Fertilizar Calculator</li>
            </Link>
            <Link to="/login" style={{ textDecoration: "none",color:"rgb(32, 59, 36)",fontFamily: "cursive" }}>
              <li>Login</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}
export default NavBar;
