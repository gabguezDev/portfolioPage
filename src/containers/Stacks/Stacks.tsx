import React from "react";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Container,
	IconButton,
	List,
	ListItem,
	Stack,
	Typography,
	Box,
} from "@mui/material";
import { styles } from "./Stacks.styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
import nextjsLogo from "../../assets/logos/nextjs-logo.svg";
import graphqlLogo from "../../assets/logos/graphql-logo.svg";
import apolloClientLogo from "../../assets/logos/apollo-logo.svg";
import axiosLogo from "../../assets/logos/axios-logo.svg";
import muiLogo from "../../assets/logos/mui-logo.svg";
import nestjsLogo from "../../assets/logos/nestjs-logo.svg";
import expressjsLogo from "../../assets/logos/expressjs-logo.svg";
import postgresqlLogo from "../../assets/logos/postgresql-logo.svg";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

const Stacks = () => {
	return (
		<Container sx={styles.container}>
			<Typography variant="h1" mt={4}>
				Stacks
			</Typography>
			<Typography variant="body1" color="primary" my={2}>
				Programming languages, frameworks & others
			</Typography>
			<Stack direction="row" width="100%" spacing={2}>
				{/* Basics */}
				<Box sx={{ width: "100%" }}>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography>Basics</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<List>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={htmlLogo}
											alt="html logo"
											width={"30px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										HTML5
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={cssLogo}
											alt="css logo"
											width={"30px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										CSS3
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={jsLogo}
											alt="javascript logo"
											width={"30px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										Javascript
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={typescriptLogo}
											alt="typescript logo"
											width={"30px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										Typescript
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={pythonLogo}
											alt="python logo"
											width={"30px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										Python
									</Typography>
								</ListItem>
							</List>
						</AccordionDetails>
					</Accordion>
				</Box>

				{/* Front End Technologies */}
				<Box sx={{ width: "100%" }}>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1b-content"
							id="panel1b-header"
						>
							<Typography>Front End Technologies</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<List>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={reactLogo}
											alt="raectjs logo"
											width={"30px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										ReactJs
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={angularLogo}
											alt="angular logo"
											width={"30px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										Angular
									</Typography>
								</ListItem>
							</List>
						</AccordionDetails>
					</Accordion>
				</Box>

				{/* Back End Technologies */}
				<Box sx={{ width: "100%" }}>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1b-content"
							id="panel1b-header"
						>
							<Typography>Back End Technologies</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<List>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={nodejsLogo}
											alt="node js logo"
											width={"30px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										NodeJs
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={nestjsLogo}
											alt="nest js  logo"
											width={"30px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										NestJs
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={expressjsLogo}
											alt="express js logo"
											width={"60px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										ExpressJs
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={djangoLogo}
											alt="django logo"
											width={"30px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										Django
									</Typography>
								</ListItem>
							</List>
						</AccordionDetails>
					</Accordion>
				</Box>

				{/* Data Bases */}
				<Box sx={{ width: "100%" }}>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1b-content"
							id="panel1b-header"
						>
							<Typography>Data Bases </Typography>
						</AccordionSummary>
						<AccordionDetails>
							<List>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={sqliteLogo}
											alt="sqlite logo"
											width={"60px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										SQLite
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={postgresqlLogo}
											alt="postgresql logo"
											width={"30px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										PostgreSQL
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={mysqlLogo}
											alt="mysql logo"
											width={"60px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										MySQL
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={mongodbLogo}
											alt="mongodb logo"
											width={"60px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										MongoDB
									</Typography>
								</ListItem>
							</List>
						</AccordionDetails>
					</Accordion>
				</Box>
			</Stack>
		</Container>
	);
};

export default Stacks;
