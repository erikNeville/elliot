import React from 'react';
import styled from "styled-components";

type MailToProps = {
	email: string;
	subject: string;
	body: string;
	children: string;
};

type SocialLinkProps = {
	address: string;
	text: string;
}

export const ScreenTitle = styled("h2")`
	text-align: center;
	padding-bottom: 12px;
`;

export const SectionHeader = styled("h3")`
	padding-top: 8px;
	padding-bottom: 8px;
	color: ${(props) => props.theme.headertext};
`;

export const SectionText = styled("p")`
	padding-left: 4px;
	margin-bottom: 16px;
	color: ${(props) => props.theme.subtext};
`;

export const MailTo = ({email, subject, body, children}: MailToProps) => {
	return (
		<a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
	);
};

export const SocialLink = ({address, text}: SocialLinkProps) => {
	return (
		<a href={address} target="_blank" rel="noopener noreferrer">{text}</a>
	);
};
