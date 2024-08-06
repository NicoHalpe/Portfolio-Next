"use client";

import { useCallback, useEffect, useState } from "react";

const useTheme = () => {
	const [theme, setTheme] = useState<string | null>(null);

	const changeTheme = (newTheme: string) => () => {
		document.documentElement.setAttribute("theme", newTheme);
	};

	const transitionToTheme = (func: () => void) => {
		// @ts-ignore
		if (!document.startViewTransition) func();
		// @ts-ignore
		else document.startViewTransition(() => func());
	};

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

		window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
			const theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
			transitionToTheme(changeTheme(theme));
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	useEffect(() => {
		const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";

		const localTheme = localStorage.getItem("theme");

		if (!localTheme) transitionToTheme(changeTheme(systemTheme));
		else transitionToTheme(changeTheme(localTheme));
	}, []);

	const switchTheme = () => {
		const theme = document.documentElement.getAttribute("theme");
		const newTheme = theme === "dark" ? "light" : "dark";
		document.documentElement.setAttribute("theme", newTheme);
		localStorage.setItem("theme", newTheme);
	};

	const handleThemeChange = () => {
		// @ts-ignore
		if (!document.startViewTransition) switchTheme();
		// @ts-ignore
		else document.startViewTransition(switchTheme);
	};

	return { theme, switchTheme: handleThemeChange };
};

export default useTheme;
