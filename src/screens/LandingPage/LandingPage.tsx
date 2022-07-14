import { Box, Typography } from "@mui/material";
import Presentation from "../../containers/Presentation/Presentation";
import Technologies from "../../containers/Technologies/Technologies";
import Stacks from "../../containers/Stacks/Stacks";
import Experience from "../../containers/Experience/Experience";
import MyWork from "../../containers/MyWork/MyWork";
import { styles } from "./LandingPage.styles";
import Footer from '../../components/Footer/Footer';

const LandingPage = () => {
	return (
		<Box sx={styles.container}>
			<Presentation />
			<Technologies />
			<Stacks />
			<Experience />
			<MyWork />
			<Footer />
		</Box>
	);
};

export default LandingPage;
