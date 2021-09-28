import React from 'react';
import { eventStrings as strings, pastEvents, socialStrings } from 'src/common/strings';

import { ScreenTitle, SectionHeader, SectionText, SocialLink } from './components/components';
import {ScreenContainer} from './components/containers';

export const EventsShowcasesScreen = () => {
	return (
		<ScreenContainer>
			<ScreenTitle>{strings.EVENTS_TITLE}</ScreenTitle>
			<SectionHeader>{strings.EVENTS_CURRENT}</SectionHeader>
			<SectionText>
				{strings.EVENTS_ADDITIONAL_1}
				<SocialLink address={socialStrings.INSTAGRAM} text={socialStrings.INSTAGRAM_TEXT} />
				{strings.EVENTS_ADDITIONAL_2}
				<SocialLink address={socialStrings.FACEBOOK} text={socialStrings.FACEBOOK_TEXT} />.
			</SectionText>

			
			<SectionHeader>{strings.EVENTS_PAST}</SectionHeader>
			{pastEvents.map((event) => (
				<div key={event.location}>
					<SectionText>{event.location} | {event.date} | {event.description}</SectionText>
				</div>
			))}
		</ScreenContainer>
	);
};
