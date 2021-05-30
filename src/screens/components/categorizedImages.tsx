import React from "react";
import { connect } from "react-redux";
import ImageDisplay, { Image } from "./image";

// for each image in the image list, display it
// if the category is true

const MusicImages = () => {
  return <ImageDisplay />;
};

const mapStateToProps = (state: { images: { images: Image } }) => {
  return {
    images: state.images.images,
  };
};

export default connect(mapStateToProps)(MusicImages);
