import React from "react";
import { Link } from "react-router-dom";
import { Categories } from "src/store/reducers/imageReducer";
import styled from "styled-components";

type OwnProps = {
  category: Categories;
  imgAlt: string;
  imgSrc: string;
};

const ImageLink = styled("img")`
  backface-visibility: hidden;
  display: block;
  position: relative;
  height: 300px;
  transition: all ease 0.4s;
`;

export const GalleryLink = ({ category, imgAlt, imgSrc }: OwnProps) => {
  return (
    <Link
      to={{
        pathname: `/${category}`,
        state: { category: category },
      }}
    >
      <ImageLink src={imgSrc} alt={imgAlt} />
    </Link>
  );
};
