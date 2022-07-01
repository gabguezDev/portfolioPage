import React from "react";
import { Stack, Box, IconButton, Icon, Slide } from "@mui/material";
import { styles } from "../../containers/Technologies/Technologies.styles";

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

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useCustomCarouselState from "./states/useCustomCarouselState";

interface ICustomCarouselProps {
	items: string[];
}

const CustomCarousel = ({ items }: ICustomCarouselProps) => {
	const {
		handlePrev,
		handleNext,
		carouselChildren,
		isTransitioningToRight,
		isTransitioningToLeft,
	} = useCustomCarouselState(items);

	return (
		<Stack
			direction="row"
			spacing={2}
			overflow="hidden"
			sx={{ position: "relative", px: 6 }}
		>
			<Box sx={{ position: "absolute", top: "50%", left: "0%" }}>
				<IconButton onClick={() => handlePrev()} size="large">
					<ArrowBackIosIcon />
				</IconButton>
			</Box>

			{carouselChildren.map((image, index) => (
				<Slide
					in={true}
					direction={"left"}
					key={index}
					mountOnEnter
					unmountOnExit
					children={
						<Box
							sx={{
								...styles.infoWrapper,
							}}
						>
							<Box
								component="img"
								src={image}
								sx={{
									width: "100px",
									...(isTransitioningToRight && {
										transform: "translate(160%)",
										transition: "transform 0.5s ease-in-out",
									}),
									...(isTransitioningToLeft && {
										transform: "translate(-160%)",
										transition: "transform 0.5s ease-in-out",
									}),
									...((index !== carouselChildren.length - 1 ||
										index !== 0 ||
										!isTransitioningToLeft ||
										isTransitioningToRight) && {
										"&:hover": {
											transition: "transform 0.2s ease-in-out",
											transform: "scale(1.2)",
										},
									}),
								}}
							/>
						</Box>
					}
					timeout={{ appear: 500, enter: 500, exit: 500 }}
				/>
			))}

			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "95%",
				}}
			>
				<IconButton onClick={() => handleNext()} size="large">
					<ArrowForwardIosIcon />
				</IconButton>
			</Box>
		</Stack>
	);
};

export default CustomCarousel;
