import React, { useEffect, useState } from "react";

const useCustomCarouselState = (items: string[]) => {
	const [carouselChildren, setCarouselChildren] = useState<string[]>([]);

	useEffect(() => {
		if (items.length > 0) {
			setCarouselChildren(items);
		}
	}, [items]);

	/* 	const handleNext = () => {
		setTimeout(() => {
			const newCarouselChildren: string[] = [...carouselChildren];
			const lastElement = newCarouselChildren.pop();
			newCarouselChildren.unshift(lastElement!);
			setCarouselChildren(newCarouselChildren);
		}, 2000);
	}; */

	return {
		carouselChildren,
		/* 		handleNext,
		 */
	};
};

export default useCustomCarouselState;
