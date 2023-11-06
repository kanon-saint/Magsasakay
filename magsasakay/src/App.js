import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./home";
import FindRoute from "./FindRoute";
import ViewRoutes from "./ViewRoutes";
import Options from "./options";
import Restaurants from "./restaurants";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signUp">
          <SignUp />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/routes">
          <Options />
        </Route>
        <Route exact path="/view-routes">
          <ViewRoutes />
        </Route>
        <Route exact path="/find-routes">
          <FindRoute />
        </Route>
        <Route exact path="/restaurants">
          <Restaurants />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
