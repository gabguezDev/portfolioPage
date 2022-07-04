import React from "react";
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

const Experience = () => {
	return (
		<Container sx={styles.container}>
			<Typography variant="h1" mt={4}>
				Experience
			</Typography>
			<Typography variant="body1" color="primary" my={2}>
				On my carrer I'm having the oportunity to work with...
			</Typography>
			<Stack direction="column" width="100%" spacing={2}>
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
									{/* <IconButton>
									<Box
										component="img"
										src={htmlLogo}
										alt="html logo"
										width={"28px"}
									/>
								</IconButton> */}
									<Typography variant="body1" color="primary" my={2}>
										ReactJs + Typescript
									</Typography>
								</ListItem>
								<ListItem>
									{/* <IconButton>
									<Box
										component="img"
										src={htmlLogo}
										alt="html logo"
										width={"28px"}
									/>
								</IconButton> */}
									<Typography variant="body1" color="primary" my={2}>
										NextJs + Typescript
									</Typography>
								</ListItem>
								<ListItem>
									{/* <IconButton>
									<Box
										component="img"
										src={htmlLogo}
										alt="html logo"
										width={"28px"}
									/>
								</IconButton> */}
									<Typography variant="body1" color="primary" my={2}>
										GraphQL + Apollo Client
									</Typography>
								</ListItem>
								<ListItem>
									{/* <IconButton>
									<Box
										component="img"
										src={htmlLogo}
										alt="html logo"
										width={"28px"}
									/>
								</IconButton> */}
									<Typography variant="body1" color="primary" my={2}>
										Axios
									</Typography>
								</ListItem>
								<ListItem>
									{/* <IconButton>
									<Box
										component="img"
										src={htmlLogo}
										alt="html logo"
										width={"28px"}
									/>
								</IconButton> */}
									<Typography variant="body1" color="primary" my={2}>
										Material UI
									</Typography>
								</ListItem>
								<ListItem>
									{/* <IconButton>
									<Box
										component="img"
										src={htmlLogo}
										alt="html logo"
										width={"28px"}
									/>
								</IconButton> */}
									<Typography variant="body1" color="primary" my={2}>
										Will be more soon...
									</Typography>
								</ListItem>
							</List>
						</AccordionDetails>
					</Accordion>
				</Box>
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
									{/* <IconButton>
									<Box
										component="img"
										src={htmlLogo}
										alt="html logo"
										width={"28px"}
									/>
								</IconButton> */}
									<Typography variant="body1" color="primary" my={2}>
										MongoDB + Compass
									</Typography>
								</ListItem>
								<ListItem>
									{/* <IconButton>
									<Box
										component="img"
										src={htmlLogo}
										alt="html logo"
										width={"28px"}
									/>
								</IconButton> */}
									<Typography variant="body1" color="primary" my={2}>
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
