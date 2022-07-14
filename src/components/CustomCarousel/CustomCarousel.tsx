import { Stack, Box } from "@mui/material";
import { styles } from "../../containers/Technologies/Technologies.styles";

import useCustomCarouselState from "./states/useCustomCarouselState";

interface ICustomCarouselProps {
	items: string[];
}

const CustomCarousel = ({ items }: ICustomCarouselProps) => {
	const { carouselChildren } = useCustomCarouselState(items);

	return (
		<Stack
			direction="row"
			spacing={2}
			overflow="hidden"
			sx={{ position: "relative", px: 6 }}
		>
			{carouselChildren.map((image, index) => (
				<Box
					key={index}
					sx={{
						...styles.infoWrapper,
					}}
				>
					<Box
						component="img"
						src={image}
						sx={{
							width: "100px",
						}}
					/>
				</Box>
			))}
		</Stack>
	);
};

export default CustomCarousel;
