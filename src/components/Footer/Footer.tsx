import React from "react";
import {
	Typography,
	Box,
	Stack,
	Link,
	IconButton,
	Tooltip,
} from "@mui/material";

import bitbucketLogoPng from "../../assets/logos/bitbucket-png-logo.png";
import gitlabLogoPng from "../../assets/logos/gitlab-png-logo.png";
import githubLogoPng from "../../assets/logos/github-png-logo.png";
import discordLogoPng from "../../assets/logos/discord-png-logo.png";

const Footer = () => {
	return (
		<Stack
			alignItems={"center"}
			direction={"column"}
			sx={{
				p: 3,
				borderRadius: 4,
				backgroundColor: "rgba(0,0,0,0.3)",
				boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
			}}
		>
			<Stack direction={"row"} spacing={3} alignItems={"center"}>
				<IconButton href="https://bitbucket.org/godmz-practices/">
					<Tooltip title="godmz-practices" placement="left">
						<Box component="img" src={bitbucketLogoPng} width={"40px"} />
					</Tooltip>
				</IconButton>
				<IconButton href="https://gitlab.com/gabriel.dominguez.dev/">
					<Tooltip title="gabriel.dominguez.dev" placement="top">
						<Box component="img" src={gitlabLogoPng} width={"40px"} />
					</Tooltip>
				</IconButton>
				<IconButton href="https://github.com/gabguezDev">
					<Tooltip title="gabguezDev" placement="top">
						<Box component="img" src={githubLogoPng} width={"40px"} />
					</Tooltip>
				</IconButton>
				<Tooltip title="GabrielDmz#6302" placement="right">
					<Box
						component="img"
						src={discordLogoPng}
						width={"40px"}
						height={"40px"}
					/>
				</Tooltip>
			</Stack>
			<Typography variant="caption" my={1}>
				Gabriel Dominguez | Portfolio Version 1.0.0
			</Typography>
			<Typography variant="caption" color={"primary"} my={1}>
				Under construction... For feedback, please contact me at
			</Typography>
			<Link href={"mailto:gabrielodominguez10@gmail.com"}>
				<Typography variant="caption" color={"black"} my={1}>
					gabrielodominguez10@gmail.com
				</Typography>
			</Link>
		</Stack>
	);
};

export default Footer;
