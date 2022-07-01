import React, { useEffect, useState } from "react";

const useCustomCarouselState = (items: string[]) => {
	const [carouselChildren, setCarouselChildren] = useState<string[]>([]);

	const [isTransitioningToRight, setIsTransitioningToRight] = useState(false);
	const [isTransitioningToLeft, setIsTransitioningToLeft] = useState(false);

	useEffect(() => {
		if (items.length > 0) {
			setCarouselChildren(items);
		}
	}, [items]);

	const handlePrev = () => {
		setIsTransitioningToLeft(true);
		setTimeout(() => {
			const newCarouselChildren: string[] = [...carouselChildren];
			const firstElement = newCarouselChildren.shift();
			newCarouselChildren.push(firstElement!);
			setCarouselChildren(newCarouselChildren);
			setIsTransitioningToLeft(false);
		}, 500);
	};

	const handleNext = () => {
		setIsTransitioningToRight(true);
		setTimeout(() => {
			const newCarouselChildren: string[] = [...carouselChildren];
			const lastElement = newCarouselChildren.pop();
			newCarouselChildren.unshift(lastElement!);
			setCarouselChildren(newCarouselChildren);
			setIsTransitioningToRight(false);
		}, 600);
	};

	return {
		carouselChildren,
		handlePrev,
		handleNext,
		isTransitioningToRight,
		isTransitioningToLeft,
	};
};

export default useCustomCarouselState;
