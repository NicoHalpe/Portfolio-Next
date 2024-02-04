import React, { useEffect, useRef } from "react";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

import styles from "./SectionSkills.module.css";
import useBouncingAnimation from "hooks/useBouncingAnimation";

export default function SectionSkills() {
	const ref = useRef<HTMLElement>(null);
	const onScreen = useIntersectionObserver(ref, { rootMargin: "-150px" });
	const [visible, setVisible] = React.useState(false);

	useEffect(() => {
		if (onScreen) {
			setVisible(true);
		}
	}, [onScreen]);

	const titleRef = useRef<HTMLHeadingElement>(null);
	useBouncingAnimation(titleRef);

	return (
		<section
			className={styles.skills + (visible ? ` ${styles.visible}` : "")}
			id="skills"
			ref={ref}
		>
			<div className={styles.content}>
				<h2 className="spanText" ref={titleRef} aria-label="Habilidades">
					<span>H</span>
					<span>a</span>
					<span>b</span>
					<span>i</span>
					<span>l</span>
					<span>i</span>
					<span>d</span>
					<span>a</span>
					<span>d</span>
					<span>e</span>
					<span>s</span>
				</h2>
				<div className={styles.cards}>
					<Card
						name={"back"}
						title={"Back-end Developer"}
						lenguajes={["Python", "Javascript"]}
						herramientas={[
							"Visual Studio Code",
							"Node.js",
							"Express",
							"Flask",
							"Postman",
							"Heroku",
							"Github",
						]}
					/>
					<Card
						name={"front"}
						title={"Front-end Developer"}
						lenguajes={["HTML", "CSS", "JSX"]}
						herramientas={[
							"Visual Studio Code",
							"Bootsrap",
							"Materialize",
							"Material-UI",
							"ReactJS",
							"JQuery",
							"Figma",
							"Github",
						]}
					/>
					<Card
						name={"software"}
						title={"Software Developer"}
						lenguajes={["Dart", "Kotlin", "Java", "C#", "Javascript"]}
						herramientas={[
							"Visual Studio Code",
							"Visual Studio",
							"Android Studio",
							"Flutter",
							"Electron",
							"Windows Presentations Framework",
							"Github",
						]}
					/>
					<Card
						name={"blockchain"}
						title={"Blockchain Developer"}
						lenguajes={["Solidity", "Javascript"]}
						herramientas={[
							"Remix IDE",
							"Web3.js",
							"Metamask",
							"Ethereum Mainnet",
							"Goerli Testnet",
							"Github",
						]}
					/>
				</div>
			</div>
			<a className="scroll-down r" href="#projects" title="ir a la seccion proyectos">
				<span>scroll down</span>
				<svg viewBox="0 0 448 512" aria-label="flecha">
					<path
						fill="currentColor"
						d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z"
						className=""
					></path>
				</svg>
			</a>
			<a className="scroll-down l" href="#projects" title="ir a la seccion proyectos">
				<span>scroll down</span>
				<svg viewBox="0 0 448 512" aria-label="flecha">
					<path
						fill="currentColor"
						d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z"
						className=""
					></path>
				</svg>
			</a>
		</section>
	);
}

type CardProps = {
	name: string;
	title: string;
	lenguajes: string[];
	herramientas: string[];
};

const Card = ({ name, title, lenguajes, herramientas }: CardProps) => {
	return (
		<Tilt className={styles.card}>
			<div className={styles.header}>
				<Image
					src={`/img/icons/${name}.svg`}
					alt={name + " logo"}
					title={name + " logo"}
					height={52}
					width={52}
					className={styles["card-icon"]}
				/>
				<h3>{title}</h3>
			</div>

			<div className={styles.languages}>
				<h4>Lenguajes</h4>
				<p>{lenguajes.join(", ")}</p>
			</div>

			<div className={styles.tools}>
				<h4>Herramientas</h4>
				<ul>
					{herramientas.map((herramienta, index) => {
						return <li key={index}>{herramienta}</li>;
					})}
				</ul>
			</div>
		</Tilt>
	);
};
