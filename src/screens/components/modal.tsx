import React from 'react';
import styled from "styled-components";

const ModalWrapper = styled("div")`
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
`;

export const ImageModal = () => {
	return (
		<ModalWrapper>
			<h2>
				modal
			</h2>
		</ModalWrapper>
	)
};