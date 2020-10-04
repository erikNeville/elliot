import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { MenuStateProvider } from "./context/UiContext";
import { Header } from "./navigation/Header";
import { HomeScreen } from "./screens/HomeScreen";

export const routeNames = [
  "Painting gallery",
  "About",
  "Contact",
  "Commissions",
  "Events & Showcases",
];

function App() {
  return (
    <Router>
      <MenuStateProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </MenuStateProvider>
    </Router>
  );
}

export default App;
