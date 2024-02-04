import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { useMediaQuery } from "hooks/useMediaQuery";

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
		const marker = document.querySelector(`.${styles.marker}`) as HTMLElement;
		const items = document.querySelectorAll(`.${styles.item}`) as NodeListOf<HTMLElement>;

		if (!marker || !items) return;

		const activeItem = items[activeLink];

		marker.style.width = `${activeItem.offsetWidth}px`;
		marker.style.height = `${activeItem.offsetHeight}px`;
		marker.style.left = `${activeItem.offsetLeft}px`;

		const handleResize = () => {
			marker.style.width = `${activeItem.offsetWidth}px`;
			marker.style.height = `${activeItem.offsetHeight}px`;
			marker.style.left = `${activeItem.offsetLeft}px`;
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [activeLink, isMobile]);

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
			<ul className={styles.items}>
				{links.map((link, i) => {
					const active = i === activeLink ? styles.active : "";
					return (
						<li key={link.href} className={`${styles.item} ${active}`} onClick={handleCloseMenu}>
							<a href={link.href}>{link.text}</a>
						</li>
					);
				})}

				<li className={styles.marker}></li>
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
