import React, { useCallback, useEffect } from "react";
/* import "./SectionMe.css"; */
import { spline } from "@georgedoescode/spline";
import SimplexNoise from "simplex-noise";
import Image from "next/image";

export default function SectionMe() {
	const [noiseStep, setNoiseStep] = React.useState(0.0005);
	const [simplex, setSimplex] = React.useState(null);
	const [points, setPoints] = React.useState(null);

	function map(n, start1, end1, start2, end2) {
		return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
	}

	const noise = useCallback(
		(x, y) => {
			return simplex.noise2D(x, y);
		},
		[simplex]
	);

	const animate = useCallback(() => {
		const path = avatar.contentDocument.querySelector("path");
		const path2 = avatar.contentDocument.getElementById("react-path-2");

		if (!path || !path2 || !points) return;

		path.setAttribute("d", spline(points, 1, true));
		path2.setAttribute("d", spline(points, 1, true));

		const coords = path.getBoundingClientRect();
		const avararCords = avatar.getBoundingClientRect();
		const hoverelement = document.getElementById("hoverelement");
		hoverelement.style.setProperty("left", `${coords.left + avararCords.left}px`, "");
		hoverelement.style.setProperty("top", `${coords.top + avararCords.top}px`, "");
		hoverelement.style.setProperty("width", `${coords.width}px`, "");
		hoverelement.style.setProperty("height", `${coords.height}px`, "");

		for (let i = 0; i < points.length; i++) {
			const point = points[i];

			const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
			const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
			const x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
			const y = map(nY, -1, 1, point.originY - 20, point.originY + 20);

			point.x = x;
			point.y = y;

			point.noiseOffsetX += noiseStep;
			point.noiseOffsetY += noiseStep;

			setPoints(points);
		}
	}, [noiseStep, points, noise]);

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

	useEffect(() => {
		//#region Animated Blob

		const setupAvatar = () => {
			try {
				const path2 = avatar.contentDocument.getElementById("react-path-2");
				const transform = avatar.contentDocument.getElementById("transform");
				transform.setAttribute("transform", "translate(845.000000, 1130.000000)");
				path2.setAttribute("transform", "translate(0, -5)");

				const simplex = new SimplexNoise();
				setSimplex(simplex);
				const points = createPoints();
				setPoints(points);

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
			} catch {}
		};

		const avatar = document.getElementById("avatar");

		if (avatar.contentDocument && avatar.contentDocument.readyState !== "complete")
			avatar.contentDocument.addEventListener("load", setupAvatar);
		else if (avatar.contentDocument) {
			setupAvatar();
		}
		avatar.addEventListener("load", setupAvatar);

		//#endregion
	}, []);

	useEffect(() => {
		[...document.querySelectorAll("#me .content h1 span")].map((el, i) => {
			el.style.setProperty("animation-delay", `${i * 50}ms`, "");
			el.classList.add("bounceIn");
			el.addEventListener("animationend", (e) => {
				if (e.animationName === "bounceIn") {
					el.style.setProperty("opacity", "1", "");
					el.classList.remove("bounceIn");
					el.style.setProperty("animation-delay", "", "");
				}
			});
			return true;
		});

		document.querySelectorAll(".spanText span:not(.blank)").forEach((el) => {
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

	const avatarClick = (e) => {
		const theme = document.documentElement.getAttribute("theme");
		document.documentElement.setAttribute("theme", theme === "dark" ? "light" : "dark");
		const colorAccent = getComputedStyle(document.documentElement).getPropertyValue(
			"--color-accent"
		);
		const textColor = getComputedStyle(document.documentElement).getPropertyValue("--text-color");
		if (avatar.contentDocument && avatar.contentDocument.readyState === "complete") {
			avatar.contentDocument.querySelector("path").setAttribute("fill", colorAccent);
		}
		if (document.getElementById("programming-svg").contentDocument)
			document
				.getElementById("programming-svg")
				.contentDocument.querySelector("style").innerHTML = `g {--color: ${textColor};}`;
	};

	return (
		<section id="me">
			<div className="content">
				<h1 className="spanText">
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
				<a href="#contact" title="ir a contacto">
					Contactame
				</a>
			</div>
			<div
				id="hoverelement"
				onClick={avatarClick}
				onMouseOver={setFastNoiseStep}
				onMouseLeave={setSlowNoiseStep}
			></div>
			<object
				id="avatar"
				type="image/svg+xml"
				data="/img/avatar.svg"
				aria-label="avatar nico halperin"
			>
				<Image height="300" width="300" src="/img/avatar.svg" alt="avatar nico halperin" />
			</object>

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
