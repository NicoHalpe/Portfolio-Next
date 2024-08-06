import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { useMediaQuery } from "hooks/useMediaQuery";
import useTheme from "hooks/useTheme";

type Props = {};

const links = [
	{
		href: "#me",
		text: "Inicio",
	},
	{
		href: "#about",
		text: "Sobre mí",
	},
	{
		href: "#skills",
		text: "Habilidades",
	},
	{
		href: "#projects",
		text: "Proyectos",
	},
	{
		href: "#contact",
		text: "Contacto",
	},
];

export default function Navbar({}: Props) {
	const [activeLink, setActiveLink] = useState(0);
	const [menuOpen, setMenuOpen] = useState(false);
	const isMobile = useMediaQuery("(max-width: 768px)");
	const { theme, switchTheme } = useTheme();

	const marker = useRef<HTMLLIElement>(null);
	const itemsContainer = useRef<HTMLUListElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll("section");
			sections.forEach((section) => {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.clientHeight;
				const sectionId = section.getAttribute("id");

				if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
					const sectionIndex = links.findIndex((link) => link.href === `#${sectionId}`);
					setActiveLink(sectionIndex);
				}
			});
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const items = itemsContainer.current?.childNodes as NodeListOf<HTMLElement>;

		if (!marker.current || !items) return;

		const activeItem = items[activeLink];

		marker.current.style.width = `${activeItem.offsetWidth}px`;
		marker.current.style.height = `${activeItem.offsetHeight}px`;
		marker.current.style.left = `${activeItem.offsetLeft}px`;

		const handleResize = () => {
			if (!marker.current) return;
			marker.current.style.width = `${activeItem.offsetWidth}px`;
			marker.current.style.height = `${activeItem.offsetHeight}px`;
			marker.current.style.left = `${activeItem.offsetLeft}px`;
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [activeLink]);

	useEffect(() => {
		if (!menuOpen) document.documentElement.style.overflow = "";
		else document.documentElement.style.overflow = "hidden";
	}, [menuOpen]);

	const handleOpenMenu: React.MouseEventHandler<HTMLElement> = (e) => {
		setMenuOpen(true);
	};

	const handleCloseMenu: React.MouseEventHandler<HTMLElement> = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setMenuOpen(false);
	};

	return (
		<nav
			className={`${styles.navbar} ${menuOpen ? styles.menuOpen : ""}`}
			onClick={isMobile ? handleOpenMenu : undefined}
		>
			<ul className={styles.items} ref={itemsContainer}>
				{links.map((link, i) => {
					const active = i === activeLink ? styles.active : "";
					return (
						<li key={link.href} className={`${styles.item} ${active}`} onClick={handleCloseMenu}>
							<a href={link.href}>{link.text}</a>
						</li>
					);
				})}

				<li className={styles.themeIcon} onClick={switchTheme}>
					{theme === "dark" ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
							/>
						</svg>
					)}
				</li>

				<li className={styles.marker} ref={marker}></li>
			</ul>

			<div className={styles.menuIcon}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					strokeWidth="2"
					stroke="currentColor"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M4 6l16 0" />
					<path d="M4 12l16 0" />
					<path d="M4 18l16 0" />
				</svg>
			</div>

			<div className={styles.closeIcon} onClick={handleCloseMenu}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					strokeWidth="2"
					stroke="currentColor"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M18 6l-12 12" />
					<path d="M6 6l12 12" />
				</svg>
			</div>
		</nav>
	);
}
