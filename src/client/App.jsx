import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { HeaderContent } from "./components/Header";
import { FooterContent } from "./components/Footer";

import { MainPage } from "./components/MainPage";

export const App = (props) => {
  return (
    <React.Fragment>
      <HeaderContent />
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="*" component={() => "404 Not found (:"} />
        </Switch>
      </Router>
      <FooterContent />
    </React.Fragment>
  );
};
