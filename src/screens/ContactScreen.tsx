import React from 'react';
import {contactStrings as strings, EMAIL, socialStrings} from 'src/common/strings';
import styled from "styled-components";

import saoirse from '../assets/images/saoirse.jpg';
import { MailTo, ScreenTitle, SectionHeader, SectionText, SocialLink } from './components/components';
import {ScreenContainer} from './components/containers';

const ImageBanner = styled("div")`
	height: 89px;
	margin-bottom: 24px;
	.image {
		width: 100%;
		height:89px;
		object-position: 50% 50%;
		object-fit: cover;
	}
`;

export const ContactScreen = () => {
	return (
		<ScreenContainer>
			<ScreenTitle>{strings.CONTACT_TITLE}</ScreenTitle>
			<ImageBanner>
				<img className="image" src={saoirse} alt="Saoirse" />
			</ImageBanner>
			<SectionHeader>{strings.EMAIL_CONTACT}</SectionHeader>
			<SectionText>
				{strings.EMAIL_CONTACT_TEXT_1}
				<MailTo email={EMAIL} subject="" body="">{EMAIL}</MailTo>
				{strings.EMAIL_CONTACT_TEXT_2}
			</SectionText>
			<SectionHeader>{strings.SOCIAL_MEDIA}</SectionHeader>
			<SectionText>
				{strings.SOCIAL_MEDIA_TEXT_1}
				<SocialLink address={socialStrings.INSTAGRAM} text={socialStrings.INSTAGRAM_TEXT} />
				{strings.SOCIAL_MEDIA_TEXT_2}
				<SocialLink address={socialStrings.FACEBOOK} text={socialStrings.FACEBOOK_TEXT} />
			</SectionText>
		</ScreenContainer>
	);
};