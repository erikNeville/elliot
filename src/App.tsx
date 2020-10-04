import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { MenuContext } from "./context/UiContext";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const menuProviderValue: any = useMemo(() => [menuOpen, setMenuOpen], [
    menuOpen,
    setMenuOpen,
  ]);

  return (
    <Router>
      <MenuContext.Provider value={menuProviderValue}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </MenuContext.Provider>
    </Router>
  );
}

export default App;
