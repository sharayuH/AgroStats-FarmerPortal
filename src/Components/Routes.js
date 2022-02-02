import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./layout/HomePage";
import Schemes from "./layout/Schemes";
import MSP from "./layout/MSP";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import Login from "./login/Login";
import CropPattern from "./layout/CropPattern";
import NewsAndTech from "./layout/NewsAndTech";
import Calculator from "./layout/Calculator";

//NavBar component has Link which is imp
function Routes() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        {/* <hr /> */}
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/home" component={HomePage}></Route>
          <Route path="/schemes" component={Schemes}></Route>
          <Route path="/msp" component={MSP}></Route>
          <Route path="/crop-pattern" component={CropPattern}></Route>
          <Route path="/calculator" component={Calculator}></Route>
          <Route path="/news-and-tech" component={NewsAndTech}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Routes;
