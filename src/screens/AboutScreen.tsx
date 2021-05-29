import React from 'react';
import styled from 'styled-components';

import {ABOUT_ARTIST_TITLE, ABOUT_ARTIST_TEXT, ABOUT_ART_TITLE, ABOUT_ART_TEXT_1, ABOUT_ART_TEXT_2, ABOUT_ART_TEXT_3} from '../common/strings';
import {ScreenContainer} from './components/containers';

const Photo = styled("div")`
	height: 300px;
	margin-bottom: 24px;
	background-color: #000000;
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
			<Photo />
			<AboutHeader>{ABOUT_ARTIST_TITLE}</AboutHeader>
			<AboutText>{ABOUT_ARTIST_TEXT}</AboutText>
			<AboutHeader>{ABOUT_ART_TITLE}</AboutHeader>
			<AboutText>{ABOUT_ART_TEXT_1}</AboutText>
			<AboutText>{ABOUT_ART_TEXT_2}</AboutText>
			<AboutText>{ABOUT_ART_TEXT_3}</AboutText>
			<br />
		</ScreenContainer>
	)
};
