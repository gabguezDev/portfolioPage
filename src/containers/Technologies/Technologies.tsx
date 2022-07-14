import { Box, Container, Stack, Typography } from "@mui/material";

import { styles } from "./Technologies.styles";
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";
import { carouselItems } from "../../constants/carouselItems";

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
