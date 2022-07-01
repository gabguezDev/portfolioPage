import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

import angularLogo from "../../assets/logos/angular-logo.svg";
import asanaLogo from "../../assets/logos/asana-logo.svg";
import bitbucketLogo from "../../assets/logos/bitbucket-logo.svg";
import cssLogo from "../../assets/logos/css-logo.svg";
import djangoLogo from "../../assets/logos/django-logo.svg";
import githubLogo from "../../assets/logos/github-logo.svg";
import htmlLogo from "../../assets/logos/html-logo.svg";
import jiraLogo from "../../assets/logos/jira-logo.svg";
import jsLogo from "../../assets/logos/js-logo.svg";
import mongodbLogo from "../../assets/logos/mongodb-logo.svg";
import mysqlLogo from "../../assets/logos/mysql-logo.svg";
import nodejsLogo from "../../assets/logos/nodejs-logo.svg";
import npmLogo from "../../assets/logos/npm-logo.svg";
import pythonLogo from "../../assets/logos/python-logo.svg";
import reactLogo from "../../assets/logos/react-logo.svg";
import sqliteLogo from "../../assets/logos/sqlite-logo.svg";
import swiftLogo from "../../assets/logos/swift-logo.svg";
import typescriptLogo from "../../assets/logos/typescript-logo.svg";
import yarnLogo from "../../assets/logos/yarn-logo.svg";

import { styles } from "./Technologies.styles";
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";

export const carouselItems = [
	asanaLogo,
	angularLogo,
	bitbucketLogo,
	cssLogo,
	djangoLogo,
	githubLogo,
	htmlLogo,
	jiraLogo,
	jsLogo,
	mysqlLogo,
	mongodbLogo,
	nodejsLogo,
	npmLogo,
	pythonLogo,
	reactLogo,
	swiftLogo,
	sqliteLogo,
	yarnLogo,
	typescriptLogo,
];

const Technologies = () => {
	return (
		<Container>
			<Stack direction="column" spacing={1}>
				<Box sx={styles.infoWrapper}>
					<Typography variant="h1" mt={4}>
						Technologies & Interests
					</Typography>
					<Typography variant="body1" color="primary" my={2}>
						I will present my skills and interests in the following
					</Typography>
				</Box>
			</Stack>
			<CustomCarousel items={carouselItems} />
		</Container>
	);
};

export default Technologies;
