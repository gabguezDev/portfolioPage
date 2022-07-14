import {
	Box,
	Container,
	Typography,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	List,
	ListItem,
	IconButton,
} from "@mui/material";
import { styles } from "./Experience.styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/material";

/* import angularLogo from "../../assets/logos/angular-logo.svg";
import asanaLogo from "../../assets/logos/asana-logo.svg";
import bitbucketLogo from "../../assets/logos/bitbucket-logo.svg";
import cssLogo from "../../assets/logos/css-logo.svg";
import djangoLogo from "../../assets/logos/django-logo.svg";
import githubLogo from "../../assets/logos/github-logo.svg";
import htmlLogo from "../../assets/logos/html-logo.svg";
import jiraLogo from "../../assets/logos/jira-logo.svg";
import jsLogo from "../../assets/logos/js-logo.svg";
import mysqlLogo from "../../assets/logos/mysql-logo.svg";
import nodejsLogo from "../../assets/logos/nodejs-logo.svg";
import npmLogo from "../../assets/logos/npm-logo.svg";
import pythonLogo from "../../assets/logos/python-logo.svg";
import sqliteLogo from "../../assets/logos/sqlite-logo.svg";
import swiftLogo from "../../assets/logos/swift-logo.svg";
import yarnLogo from "../../assets/logos/yarn-logo.svg"; */
import reactLogo from "../../assets/logos/react-logo.svg";
import typescriptLogo from "../../assets/logos/typescript-logo.svg";
import mongodbLogo from "../../assets/logos/mongodb-logo.svg";
import nextjsLogo from "../../assets/logos/nextjs-logo.svg";
import graphqlLogo from "../../assets/logos/graphql-logo.svg";
import apolloClientLogo from "../../assets/logos/apollo-logo.svg";
import axiosLogo from "../../assets/logos/axios-logo.svg";
import muiLogo from "../../assets/logos/mui-logo.svg";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

const Experience = () => {
	return (
		<Container sx={styles.container}>
			<Typography variant="h1" mt={4}>
				Experience
			</Typography>
			<Typography variant="body1" color="primary" my={2}>
				On my carrer I'm having the oportunity to work with...
			</Typography>
			<Stack direction="row" width="100%" spacing={2}>
				{/* Front End */}
				<Box>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography>Front End</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<List>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={reactLogo}
											alt="react logo"
											width={"30px"}
										/>
									</IconButton>
									<IconButton>
										<Box
											component="img"
											src={typescriptLogo}
											alt="typescript logo"
											width={"30px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2} whiteSpace="nowrap">
										ReactJs + Typescript
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={nextjsLogo}
											alt="next js logo"
											width={"30px"}
										/>
									</IconButton>
									<IconButton>
										<Box
											component="img"
											src={typescriptLogo}
											alt="typescript logo"
											width={"30px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2} whiteSpace="nowrap">
										NextJs + Typescript
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={graphqlLogo}
											alt="graphql logo"
											width={"30px"}
										/>
									</IconButton>
									<IconButton>
										<Box
											component="img"
											src={apolloClientLogo}
											alt="apollo client logo"
											width={"30px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2} whiteSpace="nowrap">
										GraphQL + Apollo
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={axiosLogo}
											alt="axios logo"
											width={"70px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										Axios Http
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={muiLogo}
											alt="material ui logo"
											width={"30px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										Material UI
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton color="info">
										<WorkHistoryIcon fontSize="large" />
									</IconButton>
									<Typography variant="body1" my={2}>
										Will be more soon...
									</Typography>
								</ListItem>
							</List>
						</AccordionDetails>
					</Accordion>
				</Box>

				{/* Back End */}
				<Box>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography>Back End</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<List>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={mongodbLogo}
											alt="mongodb logo"
											width={"70px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2} whiteSpace="nowrap">
										MongoDB + Compass
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton color="info">
										<WorkHistoryIcon fontSize="large" />
									</IconButton>
									<Typography variant="body1" my={2}>
										Will be more soon...
									</Typography>
								</ListItem>
							</List>
						</AccordionDetails>
					</Accordion>
				</Box>

				{/* Platforms */}
				<Box>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography>Platforms</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<List>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={mongodbLogo}
											alt="mongodb logo"
											width={"70px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										Heroku
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={mongodbLogo}
											alt="mongodb logo"
											width={"70px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										Netlify
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={mongodbLogo}
											alt="mongodb logo"
											width={"70px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										GoDaddy
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={mongodbLogo}
											alt="mongodb logo"
											width={"70px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										Vercel
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={mongodbLogo}
											alt="mongodb logo"
											width={"70px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2} whiteSpace="nowrap">
										AWS Cloud
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton color="info">
										<WorkHistoryIcon fontSize="large" />
									</IconButton>
									<Typography variant="body1" my={2} whiteSpace="nowrap">
										Will be more soon...
									</Typography>
								</ListItem>
							</List>
						</AccordionDetails>
					</Accordion>
				</Box>

				{/* Software */}
				<Box>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography>Software</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<List>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={mongodbLogo}
											alt="mongodb logo"
											width={"70px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2} whiteSpace="nowrap">
										Jira + Bitbucket
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={mongodbLogo}
											alt="mongodb logo"
											width={"70px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2} whiteSpace="nowrap">
										Visual Studio Code
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={mongodbLogo}
											alt="mongodb logo"
											width={"70px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										Azure DevOps
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={mongodbLogo}
											alt="mongodb logo"
											width={"70px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										Microsoft Teams
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={mongodbLogo}
											alt="mongodb logo"
											width={"70px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										Slack
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={mongodbLogo}
											alt="mongodb logo"
											width={"70px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										Discord
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton>
										<Box
											component="img"
											src={mongodbLogo}
											alt="mongodb logo"
											width={"70px"}
										/>
									</IconButton>
									<Typography variant="body1" my={2}>
										Compass
									</Typography>
								</ListItem>
								<ListItem>
									<IconButton color="info">
										<WorkHistoryIcon fontSize="large" />
									</IconButton>
									<Typography variant="body1" my={2}>
										Will be more soon...
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

export default Experience;
