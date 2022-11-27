import React, { useEffect, useRef } from "react";
/* import "./SectionSkills.css"; */
import useIntersectionObserver from './../hooks/useIntersectionObserver';
import Tilt from 'react-parallax-tilt'
import Image from "next/image";

export default function SectionSkills() {
	const ref = useRef();
	const onScreen = useIntersectionObserver(ref, { rootMargin: "-150px" });
	/* useEffect(() => {
		let tilt = document.createElement("script");
		tilt.src = "tilt.min.js";
		document.head.appendChild(tilt);
	}, []); */

	useEffect(() => {
		if (onScreen) ref.current.classList.add("visible");
	}, [onScreen]);

	return (
		<section id="skills" ref={ref}>
			<h2 className="spanText">
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
			<div className="cards">
				<Tilt className="card" options={{ speed : 1000 }}>
					<div className="header">
						<Image
							src="/img/back.svg"
							alt="back end logo"
							title="back end logo"
							height={52}
							width={52}
							className="card-icon"
						/>
						<h3>Back-end Developer</h3>
					</div>

					<div className="languages">
						<h4>Lenguajes</h4>
						<p>Python, Javascript</p>
					</div>

					<div className="tools">
						<h4>Herramientas</h4>
						<ul>
							<li>Visual Studio Code</li>
							<li>Node.js</li>
							<li>Express</li>
							<li>Flask</li>
							<li>Postman</li>
							<li>Heroku</li>
							<li>Github</li>
						</ul>
					</div>
				</Tilt>
				<Tilt className="card">
					<div className="header">
						<Image
							src="/img/front.svg"
							alt="front end logo"
							title="front end logo"
							height={52}
							width={52}
							className="card-icon"
						/>
						<h3>Front-end Developer</h3>
					</div>

					<div className="languages">
						<h4>Lenguajes</h4>
						<p>HTML, CSS</p>
					</div>

					<div className="tools">
						<h4>Herramientas</h4>
						<ul>
							<li>Visual Studio Code</li>
							<li>Bootsrap</li>
							<li>Materialize</li>
							<li>Material-UI</li>
							<li>ReactJS</li>
							<li>JQuery</li>
							<li>Figma</li>
							<li>Github</li>
						</ul>
					</div>
				</Tilt>
				<Tilt className="card">
					<div className="header">
						<Image
							src="/img/software.svg"
							alt="software logo"
							title="software logo"
							height={52}
							width={52}
							className="card-icon"
						/>
						<h3>Software Developer</h3>
					</div>

					<div className="languages">
						<h4>Lenguajes</h4>
						<p>Dart, Kotlin, Java, C#, Javascript</p>
					</div>

					<div className="tools">
						<h4>Herramientas</h4>
						<ul>
							<li>Visual Studio Code</li>
							<li>Visual Studio</li>
							<li>Android Studio</li>
							<li>Flutter</li>
							<li>Electron</li>
							<li>Windows Presentations Framework</li>
							<li>Github</li>
						</ul>
					</div>
				</Tilt>
			</div>
			<a className="scroll-down r" href="#proyects" title="ir a la seccion proyectos">
				<span>scroll down</span>
				<svg viewBox="0 0 448 512" aria-label="flecha">
					<path
						fill="currentColor"
						d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z"
						className=""
					></path>
				</svg>
			</a>
			<a className="scroll-down l" href="#proyects" title="ir a la seccion proyectos">
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
