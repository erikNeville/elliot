import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

type Image = {
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
    align-self: center;
    backface-visibility: hidden;
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    opacity: 1;
    transition: all ease 0.4s;
  }
`;

export const ImageDisplay = ({images}: any) => {
  return (
    <ImageWrapper>
      {images.map((image: Image) => (
        <div className='image-grid' key={image.src}>
          <img className='image' src={image.src} alt={image.title} />
        </div>
      ))}
    </ImageWrapper>
  )
}

const mapStateToProps = (state: {images: {images: Image;}}) => {
	return {
		images: state.images.images
	}
}

export default connect(mapStateToProps)(ImageDisplay);
