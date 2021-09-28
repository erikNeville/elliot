import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

export type Image = {
  src: string;
  title: string;
  category: string;
  medium: string;
  w: string;
  h: string;
};

const ImageWrapper = styled("div")`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  overflow: hidden;
  .image-grid {
    margin: 1rem 2rem;
    position: relative;
    transition: all 0.4s;
    @media screen and (max-width: 591px) {
      margin: 1rem 1rem;
    }
  }
  .image {
    backface-visibility: hidden;
    display: block;
    position: relative;
    max-height: 504px;
    transition: all ease 0.4s;
  }
  .image-div {
    backface-visibility: hidden;
    overflow: hidden;
    display: block;
    position: relative;
    text-align: center;
    transition: all ease 0.4s;
  }
`;

const ImageInfo = styled("div")`
  display: flex;
  text-align: center;
  flex-flow: column nowrap;
  padding-top: 12px;
  line-height: 4px;
  .info {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }
  .title {
    font-weight: 600;
    font-size: 16px;
    flex-wrap: wrap;
    padding-bottom: 14px;
  }
  .medium {
    justify-self: flex-end;
    font-size: 14px;
  }
  .size {
    font-size: 14px;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ConnectedImageDisplay = ({ images }: any) => {
  // const music = images.filter((image: any) => image.category === "music");
  // console.log(music);
  return (
    <ImageWrapper>
      {images &&
        images.map((image: Image) => (
          <div className="image-grid" key={image.src}>
            <div className="image-div">
              <img className="image" src={image.src} alt={image.title} />
            </div>
            <ImageInfo>
              <div className="title">
                <p>{image.title}</p>
              </div>
              <div className="info">
                <p className="size">
                  {image.w}&quot; X {image.h}&quot; <strong>|</strong>
                </p>
                <p className="medium">&nbsp;{image.medium}</p>
              </div>
            </ImageInfo>
          </div>
        ))}
    </ImageWrapper>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ConnectedCategoryImageDisplay = ({ images, category }: any) => {
  return (
    <ImageWrapper>
      {images &&
        images
          .filter((image: Image) => image.category === category)
          .map((image: Image) => (
            <div className="image-grid" key={image.src}>
              <div className="image-div">
                <img className="image" src={image.src} alt={image.title} />
              </div>
              <ImageInfo>
                <div className="title">
                  <p>{image.title}</p>
                </div>
                <div className="info">
                  <p className="size">
                    {image.w}&quot; X {image.h}&quot; <strong>|</strong>
                  </p>
                  <p className="medium">&nbsp;{image.medium}</p>
                </div>
              </ImageInfo>
            </div>
          ))}
    </ImageWrapper>
  );
};

const mapStateToProps = (state: { images: { images: Image } }) => {
  return {
    images: state.images.images,
  };
};

export const ImageDisplay = connect(mapStateToProps)(ConnectedImageDisplay);

export const CategoryImageDisplay = connect(mapStateToProps)(
  ConnectedCategoryImageDisplay,
);
