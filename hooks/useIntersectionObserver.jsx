import React from "react";

export default function useIntersectionObserver(ref, options) {
	const [isIntersecting, setIsIntersecting] = React.useState(false);

	React.useEffect(() => {
		if(!ref?.current) return;
		const current = ref.current;
		const observer = new IntersectionObserver(([entry]) => {
			setIsIntersecting(entry.isIntersecting);
		}, options);

		if (current) {
			observer.observe(current);
		}

		return () => {
			observer.unobserve(current);
		};
	}, [ref, options]);

	return isIntersecting;
}
