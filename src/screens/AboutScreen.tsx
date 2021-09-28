import React from 'react';
import styled from 'styled-components';

import cosmic_tiger from '../assets/images/cosmic_tiger.jpg';
import {aboutStrings as strings} from '../common/strings';
import {ScreenContainer} from './components/containers';

const ImageBanner = styled("div")`
	height: 300px;
	margin-bottom: 24px;
	.image {
		width: 100%;
		height: 300px;
		object-position: 50% 30%;
		object-fit: cover;
	}
`;

const AboutHeader = styled("h3")`
	padding-bottom: 8px;
	color: ${(props) => props.theme.headertext};
`;

const AboutText = styled("p")`
	padding-left: 4px;
	margin-bottom: 16px;
	color: ${(props) => props.theme.subtext};
`;


export const AboutScreen = () => {
	return (
		<ScreenContainer>
			<ImageBanner>
				<img className="image" src={cosmic_tiger} alt="Cosmic Tiger Queen 24x48" />
			</ImageBanner>
			<AboutHeader>{strings.ABOUT_ARTIST_TITLE}</AboutHeader>
			<AboutText>{strings.ABOUT_ARTIST_TEXT}</AboutText>
			<AboutHeader>{strings.ABOUT_ART_TITLE}</AboutHeader>
			<AboutText>{strings.ABOUT_ART_TEXT_1}</AboutText>
			<AboutText>{strings.ABOUT_ART_TEXT_2}</AboutText>
			<AboutText>{strings.ABOUT_ART_TEXT_3}</AboutText>
			<br />
		</ScreenContainer>
	)
};
