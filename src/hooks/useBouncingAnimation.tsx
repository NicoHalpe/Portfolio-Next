import { useEffect } from "react";

export default function useBouncingAnimation(ref: React.RefObject<HTMLElement>) {
	useEffect(() => {
		if (!ref?.current) return;

		const titleEl = ref.current;

		titleEl.querySelectorAll("span:not(.blank)").forEach((el) => {
			el.addEventListener("mouseover", (e) => {
				el.classList.add("animated");
			});
			el.addEventListener("animationend", (e) => {
				el.classList.remove("animated");
			});
		});

		return () => {
			titleEl.querySelectorAll("span:not(.blank)").forEach((el) => {
				el.removeEventListener("mouseover", (e) => {
					el.classList.add("animated");
				});
				el.removeEventListener("animationend", (e) => {
					el.classList.remove("animated");
				});
			});
		};
	}, [ref]);
}
