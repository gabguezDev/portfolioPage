import React from "react";

const useDownload = () => {
	const onDownload = () => {
		const link = document.createElement("a");
		link.download = `cv_dominguez_gabriel_react_dev.pdf`;
		link.href = "/files/cv_dominguez_gabriel_react_dev.pdf";
		link.click();
	};

	return { onDownload };
};

export default useDownload;
