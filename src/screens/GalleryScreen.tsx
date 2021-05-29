import React from "react";

import { ScreenContainer } from "./components/containers";

import { MusicImages } from "./components/categorizedImages";

export const GalleryScreen = () => {
  // return to top of page button
  return (
    <ScreenContainer>
      <h1>Gallery Screen</h1>
      <MusicImages />
    </ScreenContainer>
  );
};
