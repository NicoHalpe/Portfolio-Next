import { useEffect, useState } from "react";

const useTheme = () => {
	const [theme, setTheme] = useState<string | null>("dark");
	useEffect(() => {
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.attributeName === "theme") {
					const theme = document.documentElement.getAttribute("theme");
					setTheme(theme);
				}
			});
		});

		observer.observe(document.documentElement, { attributes: true });

		return () => {
			observer.disconnect();
		};
	}, []);

	const switchTheme = () => {
		const theme = document.documentElement.getAttribute("theme");
		document.documentElement.setAttribute("theme", theme === "dark" ? "light" : "dark");
	};

	const handleThemeChange = () => {
		// @ts-ignore
		if (!document.startViewTransition) switchTheme();
		// @ts-ignore
		else document.startViewTransition(switchTheme);
	}

	return { theme, switchTheme: handleThemeChange };
};

export default useTheme;