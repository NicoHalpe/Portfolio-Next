import React, { useCallback, useEffect, useRef, useState } from "react";
import { spline } from "utils/spline";
import SimplexNoise from "simplex-noise";

import styles from "./SectionMe.module.css";
import { Avatar, Button } from "components";
import useTheme from "hooks/useTheme";

type Point = {
	x: number;
	y: number;
	originX: number;
	originY: number;
	noiseOffsetX: number;
	noiseOffsetY: number;
};

export default function SectionMe() {
	const [noiseStep, setNoiseStep] = useState(0.0005);
	const [simplex, setSimplex] = useState<SimplexNoise | null>(null);
	const [points, setPoints] = useState<Point[]>();

	const avatarRef = useRef<HTMLDivElement>(null);
	const hoverElementRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const [avatar, setAvatar] = useState<HTMLDivElement>();

	const [light, setLight] = useState(false);

	const { theme, switchTheme } = useTheme();

	function map(n: number, start1: number, end1: number, start2: number, end2: number) {
		return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
	}

	const noise = useCallback(
		(x: number, y: number) => {
			return simplex?.noise2D(x, y);
		},
		[simplex]
	);

	const animate = useCallback(() => {
		if (!avatar) return;
		const path = avatar.querySelector("path");
		const path2 = avatar.querySelector("#react-path-2");

		if (!path || !path2 || !points) return;

		path.setAttribute("d", spline(points, 1, true));
		path2.setAttribute("d", spline(points, 1, true));

		const coords = path.getBoundingClientRect();
		hoverElementRef.current?.style.setProperty("left", `${coords.left}px`, "");
		hoverElementRef.current?.style.setProperty("top", `${coords.top}px`, "");
		hoverElementRef.current?.style.setProperty("width", `${coords.width}px`, "");
		hoverElementRef.current?.style.setProperty("height", `${coords.height}px`, "");

		for (let i = 0; i < points.length; i++) {
			const point = points[i];

			const nX = noise(point.noiseOffsetX, point.noiseOffsetX) || 0;
			const nY = noise(point.noiseOffsetY, point.noiseOffsetY) || 0;
			const x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
			const y = map(nY, -1, 1, point.originY - 20, point.originY + 20);

			point.x = x;
			point.y = y;

			point.noiseOffsetX += noiseStep;
			point.noiseOffsetY += noiseStep;

			setPoints(points);
		}
	}, [noiseStep, points, noise, avatar]);

	useEffect(() => {
		let animNumber = 0;
		const callAnimate = () => {
			animate();
			animNumber = requestAnimationFrame(callAnimate);
		};

		callAnimate();

		return () => {
			cancelAnimationFrame(animNumber);
		};
	}, [noiseStep, animate]);

	function createPoints() {
		const points = [];
		const numPoints = 5;
		const angleStep = (Math.PI * 2) / numPoints;
		const rad = 78;

		for (let i = 1; i <= numPoints; i++) {
			const theta = i * angleStep;

			const x = 100 + Math.cos(theta) * rad;
			const y = 100 + Math.sin(theta) * rad;

			points.push({
				x: x,
				y: y,
				originX: x,
				originY: y,
				noiseOffsetX: Math.random() * 1000,
				noiseOffsetY: Math.random() * 1000,
			});
		}

		return points;
	}

	useEffect(() => {
		//#region Animated Blob

		const setupAvatar = () => {
			if (!avatar) return;
			try {
				const path2 = avatar.querySelector("#react-path-2");
				const transform = avatar.querySelector("#transform");
				transform?.setAttribute("transform", "translate(845.000000, 1130.000000)");
				path2?.setAttribute("transform", "translate(0, -5)");

				const simplex = new SimplexNoise();
				setSimplex(simplex);
				const points = createPoints();
				setPoints(points);
			} catch {}
		};

		const i = setInterval(() => {
			if (avatar) {
				setupAvatar();
				clearInterval(i);
				return;
			}
			setAvatar(avatarRef.current?.children[0] as HTMLDivElement);
		}, 100);

		/* if(avatar) setupAvatar(); */

		//#endregion
	}, [avatarRef, avatar]);

	useEffect(() => {
		/* const theme = document.documentElement.getAttribute("theme");
		setLight(theme === "dark" ? false : true); */

		const titleEl = titleRef.current;
		if (!titleEl) return;

		titleEl.querySelectorAll("span").forEach((el, i) => {
			el.style.setProperty("animation-delay", `${i * 50}ms`, "");
			el.classList.add(styles.bounceIn);
			el.addEventListener("animationend", (e) => {
				if (e.animationName === styles.bounceIn) {
					el.style.setProperty("opacity", "1", "");
					el.classList.remove(styles.bounceIn);
					el.style.setProperty("animation-delay", "", "");
				}
			});
			return true;
		});

		titleEl.querySelectorAll("span:not(.blank)").forEach((el) => {
			el.addEventListener("mouseover", (e) => {
				el.classList.add("animated");
			});
			el.addEventListener("animationend", (e) => {
				el.classList.remove("animated");
			});
		});
	}, []);

	const setSlowNoiseStep = () => {
		setNoiseStep(0.0005);
	};

	const setFastNoiseStep = () => {
		setNoiseStep(0.001);
	};

	useEffect(() => {
		const colorAccent = getComputedStyle(document.documentElement).getPropertyValue(
			"--color-accent"
		);
		avatar?.querySelector("path")?.setAttribute("fill", colorAccent);
		setLight(theme === "light" ? true : false);
	}, [avatar, theme]);

	return (
		<section className={styles.me} id="me">
			<div className={styles.content}>
				<h1 className="spanText" ref={titleRef}>
					<span>H</span>
					<span>o</span>
					<span>l</span>
					<span>a</span>
					<span>,</span>
					<br />
					<span>S</span>
					<span>o</span>
					<span>y</span>
					<span className="blank"> </span>
					<span>N</span>
					<span>i</span>
					<span>c</span>
					<span>o</span>
					<span>,</span>
					<br />
					<span>F</span>
					<span>u</span>
					<span>l</span>
					<span>l</span>
					<span className="blank"> </span>
					<span>S</span>
					<span>t</span>
					<span>a</span>
					<span>c</span>
					<span>k</span>
					<span className="blank"> </span>
					<span>D</span>
					<span>e</span>
					<span>v</span>
					<span>e</span>
					<span>l</span>
					<span>o</span>
					<span>p</span>
					<span>e</span>
					<span>r</span>
				</h1>
				<p>Automatizando el mundo</p>
				<div className={styles.buttons}>
					<Button link href="#contact" title="ir a contacto">
						Contactame
					</Button>
					<Button link href="/Nicolas Halperin CV.pdf" download={true} title="descargar cv">
						Descargar CV
					</Button>
				</div>
			</div>
			<div
				ref={hoverElementRef}
				className={styles.hoverelement}
				onClick={switchTheme}
				onMouseOver={setFastNoiseStep}
				onMouseLeave={setSlowNoiseStep}
			></div>

			<div ref={avatarRef} className={styles.avatar} id="avatar">
				<Avatar light={light} />
			</div>

			{/* <object
				id="avatar"
				type="image/svg+xml"
				data="/img/avatar.svg"
				aria-label="avatar nico halperin"
			>
				<Image height="300" width="300" src="/img/avatar.svg" alt="avatar nico halperin" />
			</object> */}

			<a className="scroll-down r" href="#about" title="ir a la seccion sobre mi">
				<span>scroll down</span>
				<svg viewBox="0 0 448 512" aria-label="flecha">
					<path
						fill="currentColor"
						d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z"
					></path>
				</svg>
			</a>
			<a className="scroll-down l" href="#about" title="ir a la seccion sobre mi">
				<span>scroll down</span>
				<svg viewBox="0 0 448 512" aria-label="flecha">
					<path
						fill="currentColor"
						d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z"
					></path>
				</svg>
			</a>
		</section>
	);
}
