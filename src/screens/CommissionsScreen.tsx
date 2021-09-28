import React from 'react';
import { commissionStrings as strings, EMAIL } from 'src/common/strings';

import { MailTo, ScreenTitle, SectionHeader, SectionText } from './components/components';
import {ScreenContainer} from './components/containers';

export const CommissionsScreen = () => {
	return (
		<ScreenContainer>
			<ScreenTitle>{strings.COMMISSION_TITLE}</ScreenTitle>
			<SectionHeader>{strings.COMMISSION_INQUERY}</SectionHeader>
			<SectionText>{strings.COMMISSION_INQUERY_TEXT}</SectionText>
			<SectionHeader>{strings.COMMISSION_PROCESS}</SectionHeader>
			<SectionText>{strings.COMMISSION_PROCESS_TEXT_1}</SectionText>
			<SectionText>
				{strings.COMMISSION_PROCESS_TEXT_2}
				<MailTo email={EMAIL} subject="" body="">{EMAIL}</MailTo>
			</SectionText>
			<br />
		</ScreenContainer>
	)
}