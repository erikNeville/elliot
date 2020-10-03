import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./navigation/Header";
import { HomeScreen } from "./screens/HomeScreen";

export const routeNames = ["Painting gallery", "About", "Contact", "Commissions", "Events & Showcases"];

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    </Router>
  );
}

export default App;
