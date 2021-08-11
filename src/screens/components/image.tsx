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
    width: 100%;
    height: auto;
    opacity: 1;
    transition: all ease 0.4s;
  }

  .image-div {
    backface-visibility: hidden;
    overflow: hidden;
    display: block;
    position: relative;
    text-align: center;

    p {
      opacity: 0;
      font-weight: bold;
      font-size: 22px;
      position: absolute;
      top: 110%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      text-shadow: 2px 2px #000000;
      background-color: rgba(63, 191, 191, 0.6);
      border-radius: 4px;
      padding: 4px 8px;
    }

    &:hover {
      opacity: 0.95;
    }

    &:hover p {
      opacity: 1;
      top: 50%;
      left: 50%;
      transition: opacity, 0.45s;
      transform: translate(-50%, -50%);
      transition-delay: 0.02s;
    }
  }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ImageDisplay = ({ images }: any) => {
  // ImageDisplay needs to take in a category prop
  console.log(images);
  return (
    <ImageWrapper>
      {images.map((image: Image) => (
        <div className="image-grid" key={image.src}>
          <div className="image-div">
            <img className="image" src={image.src} alt={image.title} />
            <button>
            <p>{image.title}</p>
            </button>
          </div>
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

export default connect(mapStateToProps)(ImageDisplay);
