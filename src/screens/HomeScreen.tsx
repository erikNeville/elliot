import React from "react";

import { INTRO_STRING } from "../common/strings";
import { ScreenContainer } from "./components/containers";

export const HomeScreen = () => {
  return (
    <ScreenContainer>
      <div style={{ height: "1000px" }}>
        <p>{INTRO_STRING}</p>
      </div>
    </ScreenContainer>
  );
};
