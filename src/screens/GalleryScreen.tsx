import React from "react";
import {connect } from 'react-redux';

import MusicImages from "./components/categorizedImages";
import { ScreenContainer } from "./components/containers";


const GalleryScreen = () => {
  // return to top of page button
  return (
    <ScreenContainer>
      <h1>Gallery Screen</h1>
      <MusicImages />
    </ScreenContainer>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapStateToProps = (state: any) => {
  return {
    images: state.images.images, 
  };
};

export default connect(mapStateToProps)(GalleryScreen);
