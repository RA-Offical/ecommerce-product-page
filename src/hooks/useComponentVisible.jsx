import { useState, useRef, useEffect } from "react";

const useComponentVisble = (defaultVisibilty, outSideHandler) => {
	const [isVisible, setIsVisible] = useState(defaultVisibilty);
	const componentRef = useRef(null);

	useEffect(() => {
		document.addEventListener("click", outSideHandler);

		() => document.removeEventListener("click", outSideHandler);
	}, []);

	return { componentRef, isVisible, setIsVisible };
};

export default useComponentVisble;
