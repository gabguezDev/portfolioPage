import { Box, Typography } from "@mui/material";
import Presentation from "../../containers/Presentation/Presentation";
import Technologies from "../../containers/Technologies/Technologies";
import Stacks from "../../containers/Stacks/Stacks";
import Experience from "../../containers/Experience/Experience";
import MyWork from "../../containers/MyWork/MyWork";
import { styles } from "./LandingPage.styles";

const LandingPage = () => {
	return (
		<Box sx={styles.container}>
			<Presentation />
			<Technologies />
			<Stacks />
			<Experience />
			<MyWork />
			<Typography sx={styles.copyright}>
				Gabriel Dominguez <br /> Version 1.0.0
			</Typography>
		</Box>
	);
};

export default LandingPage;
