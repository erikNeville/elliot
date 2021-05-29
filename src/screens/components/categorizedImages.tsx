import React from "react";
import { connect } from "react-redux";
import { ImageDisplay } from "./image";
type Image = {
  src: string;
  title: string;
  category: string;
  medium: string;
  w: string;
  h: string;
};
export const MusicImages = ({ images }: any) => {
  return <ImageDisplay />;
};

const mapStateToProps = (state: { images: { images: Image } }) => {
  return {
    images: state.images.images,
  };
};

export default connect(mapStateToProps)(MusicImages);
