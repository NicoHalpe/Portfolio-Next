import React from "react";

export default function useIntersectionObserver(ref, options) {
	const [isIntersecting, setIsIntersecting] = React.useState(false);

	React.useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setIsIntersecting(entry.isIntersecting);
		}, options);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			observer.unobserve(ref.current);
		};
	}, []);

	return isIntersecting;
}
