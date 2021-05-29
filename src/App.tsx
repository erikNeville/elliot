import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import { MenuStateProvider } from "./context/UiContext";
import { Header } from "./navigation/Header";
import { AboutScreen } from "./screens/AboutScreen";
import { CommissionsScreen } from "./screens/CommissionsScreen";
import { ContactScreen } from "./screens/ContactScreen";
import { EventsShowcasesScreen } from "./screens/EventsShowcasesScreen";
import { GalleryScreen } from "./screens/GalleryScreen";
import { HomeScreen } from "./screens/HomeScreen";

export const routeNames = [
  "Painting gallery",
  "About",
  "Contact",
  "Commissions",
  "Events & Showcases",
];

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MenuStateProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/painting" component={GalleryScreen} />
          <Route path="/about" component={AboutScreen} />
          <Route path="/contact" component={ContactScreen} />
          <Route path="/commissions" component={CommissionsScreen} />
          <Route path="/events" component={EventsShowcasesScreen} />
          <Route path="*" component={HomeScreen} />
        </Switch>
      </MenuStateProvider>
    </Router>
  );
}

export default App;
