import React from "react";
import Presentation from "../../containers/Presentation/Presentation";
import Technologies from "../../containers/Technologies/Technologies";
import Stacks from "../../containers/Stacks/Stacks";
import Experience from "../../containers/Experience/Experience";

const LandingPage = () => {
	return (
		<>
			<Presentation />
			<Technologies />
			<Stacks />
			<Experience />
		</>
	);
};

export default LandingPage;
