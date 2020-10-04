import React, { useContext } from "react";
import { MenuContext } from "src/context/UiContext";

import { ScreenContainer } from "./components/containers";

export const HomeScreen = () => {
  const [isMenuOpen]: any = useContext(MenuContext);
  console.log("HomeScreen Menu Context: ", isMenuOpen);
  return (
    <ScreenContainer>
      <div style={{ height: "10000px" }}>
        <p>Home Screen</p>
      </div>
    </ScreenContainer>
  );
};
