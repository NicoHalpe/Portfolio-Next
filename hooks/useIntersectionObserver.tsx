import React from "react";

export default function useIntersectionObserver(ref: React.RefObject<HTMLElement>, options: IntersectionObserverInit) {
	const [isIntersecting, setIsIntersecting] = React.useState(false);

	React.useEffect(() => {
		if (!ref?.current) return;
		const current = ref.current;
		const observer = new IntersectionObserver(([entry]) => {
			if (isIntersecting) return;
			setIsIntersecting(entry.isIntersecting);
			if (entry.isIntersecting) observer.unobserve(current);
		}, options);

		if (current) {
			observer.observe(current);
		}

		return () => {
			observer.unobserve(current);
		};
	}, [ref, options, isIntersecting]);

	return isIntersecting;
}
