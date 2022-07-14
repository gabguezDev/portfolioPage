import React from "react";
import {
	Box,
	Button,
	Container,
	Link,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Stack,
	Typography,
} from "@mui/material";

import Me from "../../assets/images/me.png";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DownloadIcon from "@mui/icons-material/Download";

import { styles } from "./Presentation.styles";
import useDownload from "./states/useDownload";

const Presentation = () => {
	const { onDownload } = useDownload();

	return (
		<Box
			sx={{
				backgroundColor: "rgba(0,0,0,0.2)",
				boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.1)",
				borderRadius: 4,
				p: 3,
			}}
		>
			<Stack direction="row" spacing={1}>
				<Box sx={styles.infoWrapper}>
					<Box
						component="img"
						src={Me}
						sx={styles.img}
						width={"400px"}
						height={"400px"}
					/>
				</Box>
				<Box sx={styles.infoWrapper}>
					<Typography variant="h1" mt={4}>
						Hello, I'm Gabriel.
					</Typography>
					<Typography variant="h5" color="primary" my={2}>
						Software Developer
					</Typography>
					<Typography variant="body1" my={2}>
						I'm a software developer with a passion for building good quality
						software. I'm currently working as a Front End Developer making
						React projects. I'm so excited to learn new technologies and share
						my knowledge with you. My interests about technologies are: <br />{" "}
						<br />
						ReactJs, React Native, TypeScript, NodeJs, GraphQL, Apollo, MongoDB,
						MySQL and Swift. I will tell you more about my experience and my
						skills below.
					</Typography>
					<List>
						<ListItem>
							<ListItemIcon>
								<EmailIcon />
							</ListItemIcon>
							<Link
								underline="none"
								color="primary"
								href="mailto:gabrielodominguez10@gmail.com"
							>
								<Typography>gabrielodominguez10@gmail.com</Typography>
							</Link>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<LinkedInIcon />
							</ListItemIcon>
							<Link
								underline="none"
								color="primary"
								href="www.linkedin.com/gabrielodominguez"
							>
								<Typography>/gabrielodominguez</Typography>
							</Link>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<LocationOnIcon />
							</ListItemIcon>
							<ListItemText primary="Argentina" />
						</ListItem>
					</List>
					<Button
						size="large"
						variant="contained"
						endIcon={<DownloadIcon />}
						onClick={onDownload}
					>
						Download CV
					</Button>
				</Box>
			</Stack>
		</Box>
	);
};

export default Presentation;
