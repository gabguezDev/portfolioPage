import React from "react";
import { Container, Stack, Typography, Paper, Box, Link } from "@mui/material";

import { styles } from "./MyWork.styles";

import bitbucketLogo from "../../assets/logos/bitbucket-logo.svg";
import githubLogo from "../../assets/logos/github-logo.svg";
import gitlabLogo from "../../assets/logos/gitlab-logo.svg";

const MyWork = () => {
	return (
		<Container sx={styles.container}>
			<Typography variant="h1" mt={4}>
				My Practices & Models of Working
			</Typography>
			<Typography variant="body1" color="primary" my={2}>
				On my carrer I'm having the oportunity to work with...
			</Typography>
			<Box sx={styles.stacksContainer}>
				<Stack width="100%">
					<Paper sx={styles.paper}>
						<Box component="img" src={bitbucketLogo} width={"50px"} mx={1} />
						<Link underline="hover" sx={styles.link}>
							<Typography>Content posted at Bitbucket</Typography>
						</Link>
					</Paper>
				</Stack>
				<Stack width="100%">
					<Paper sx={styles.paper}>
						<Box component="img" src={githubLogo} width={"45px"} mx={1} />
						<Link underline="hover" sx={styles.link}>
							<Typography>Content posted at GitHub</Typography>
						</Link>
					</Paper>
				</Stack>
				<Stack width="100%">
					<Paper sx={styles.paper}>
						<Box component="img" src={gitlabLogo} width={"45px"} mx={1} />
						<Link underline="hover" sx={styles.link}>
							<Typography>Content posted at GitLab</Typography>
						</Link>
					</Paper>
				</Stack>
			</Box>
		</Container>
	);
};

export default MyWork;
