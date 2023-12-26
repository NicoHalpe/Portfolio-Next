/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { SwipeEventData, useSwipeable } from "react-swipeable";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import styles from "./SectionProjects.module.css";
import useBouncingAnimation from "../../hooks/useBouncingAnimation";
import projects from "../constants/projects";

type SwipeEvent = CustomEvent<{
	// swipe direction
	dir: "up" | "down" | "left" | "right";
	// touch type - stylus=apple pencil and direct=finger
	touchType: "stylus" | "direct";
	// x coords of swipe start
	xStart: number;
	// x coords of swipe end
	xEnd: number;
	// y coords of swipe start
	yStart: number;
	// y coords of swipe end
	yEnd: number;
}>;

type Project = {
	title: string;
	description: string;
	stacks: string[];
	image: string;
	link: string;
	download?: boolean;
};

export default function SectionProjects() {
	const [originals, setOriginals] = useState<HTMLDivElement[]>([]);
	const [images, setImages] = useState<HTMLDivElement>();
	const [dots, setDots] = useState<HTMLDivElement>();
	const [startCard, setStartCard] = useState(1);
	const [cardWidth, setCardWidth] = useState(0);
	const [mobileDif, setMobileDif] = useState(0);
	const [animating, setAnimating] = useState(false);

	const ref = useRef<HTMLElement>(null);
	const onScreen = useIntersectionObserver(ref, { rootMargin: "-150px" });

	const titleRef = useRef<HTMLHeadingElement>(null);
	useBouncingAnimation(titleRef);

	const handleCardClickPos = (dif: number) => {
		if (!images || animating) return;

		setAnimating(true);

		const check = images.querySelectorAll(`.${styles.card}`)[
			images.querySelectorAll(`.${styles.card}`).length - 1
		];
		let currentOriginalPos =
			originals.findIndex(
				(original) =>
					original.querySelector(`.${styles["card-title"]}`)?.innerHTML ===
					check?.querySelector(`.${styles["card-title"]}`)?.innerHTML
			) + 1;
		if (currentOriginalPos > originals.length - 1) {
			currentOriginalPos = currentOriginalPos - originals.length;
		}
		let currentCard = startCard;
		images.style.setProperty("pointer-events", "none");
		currentCard += dif;
		images.style.transitionDuration = "0.5s";
		images.style.transform = `translate(-${currentCard * cardWidth - mobileDif}px)`;
		for (var i = 0; i < dif; i++) {
			const clone = originals[currentOriginalPos].cloneNode(true);
			images.appendChild(clone);
			currentOriginalPos += 1;
			if (currentOriginalPos > originals.length - 1) {
				currentOriginalPos = currentOriginalPos - originals.length;
			}
		}
		images.children[currentCard].classList.add(styles.visible);
		images.children[currentCard - dif].classList.remove(styles.visible);

		setTimeout(() => {
			images.style.setProperty("pointer-events", "all");
			currentCard -= dif;
			for (var i = 0; i < dif; i++) {
				images.children[0].remove();
			}
			images.style.transitionDuration = "0s";
			images.style.transform = `translate(-${currentCard * cardWidth - mobileDif}px)`;

			setAnimating(false);
		}, 500);
	};

	const handleCardClickNeg = (dif: number) => {
		if (!images || animating) return;

		let currentCard = startCard;
		if (!images.children[currentCard - dif]) return;

		setAnimating(true);

		const check = images.querySelectorAll(`.${styles.card}`)[0];
		let currentOriginalNeg =
			originals.findIndex(
				(original) =>
					original.querySelector(`.${styles["card-title"]}`)?.innerHTML ===
					check.querySelector(`.${styles["card-title"]}`)?.innerHTML
			) - 1;
		if (currentOriginalNeg < 0) {
			currentOriginalNeg = originals.length - 1;
		}
		images.style.setProperty("pointer-events", "none");
		currentCard -= dif;

		images.children[currentCard + dif].classList.remove(styles.visible);
		images.children[currentCard].classList.add(styles.visible);

		for (var i = 0; i < dif; i++) {
			const firstImage = images.children[0];
			const firstImageIndexProp = (firstImage.getAttribute("data-index") || 0) as number;
			const indexToClone =
				firstImageIndexProp - 1 < 0 ? originals.length - 1 : firstImageIndexProp - 1;
			const clone = originals[indexToClone].cloneNode(true);
			images.insertBefore(clone, images.children[0]);
			currentOriginalNeg += 1;
			if (currentOriginalNeg > originals.length) {
				currentOriginalNeg = currentOriginalNeg - originals.length;
			}
			/* const clone = originals[currentOriginalNeg].cloneNode(true);
			images.insertBefore(clone, images.children[0]);
			currentOriginalNeg += 1;
			if (currentOriginalNeg > originals.length) {
				currentOriginalNeg = currentOriginalNeg - originals.length;
			} */
		}
		images.style.transitionDuration = "0s";
		images.style.transform = `translate(-${(startCard + dif) * cardWidth - mobileDif}px)`;

		setTimeout(() => {
			images.style.transitionDuration = "0.5s";
			images.style.transform = `translate(-${startCard * cardWidth - mobileDif}px)`;

			setTimeout(() => setAnimating(false), 500);
		}, 10);

		setTimeout(() => {
			images.style.setProperty("pointer-events", "all");
			currentCard += dif;
			for (var i = 0; i < dif; i++) {
				images.children[images.children.length - 1].remove();
			}
		}, 500);
	};

	useEffect(() => {
		if (onScreen) ref.current?.classList.add(styles.visible);
	}, [onScreen]);

	const onSwipe = (e: SwipeEvent) => {
		switch (e.detail.dir) {
			case "right":
				handleCardClickNeg(1);
				break;
			case "left":
				handleCardClickPos(1);
				break;
			default:
				break;
		}
	};

	const onKeyDown = (e: KeyboardEvent) => {
		if (animating) return;
		switch (e.keyCode) {
			case 37:
				handleCardClickNeg(1);
				break;
			case 39:
				handleCardClickPos(1);
				break;
			default:
				break;
		}
	};

	const onResize = () => {
		if (!cardsRef.current) return;
		const cards = cardsRef.current.children;
		const startCard = Math.floor(cards.length / 2);
		setStartCard(startCard);
		cards[startCard].classList.add(styles.visible);

		let cw;
		let mb;
		if (window.innerWidth < 1000) {
			setCardWidth(window.innerWidth * 0.8 + 10);
			cw = window.innerWidth * 0.8 + 10;
			setMobileDif(window.innerWidth * 0.1);
			mb = window.innerWidth * 0.1;
		} else {
			setCardWidth(460);
			cw = 460;
			setMobileDif(0);
			mb = 0;
		}

		if (images) images.style.transform = `translate(-${startCard * cw - mb}px)`;
	};

	const onMouseDown = (e: MouseEvent) => {
		if (!images) return;
		const children = Array.prototype.slice.call(images.children);
		const index = children.indexOf(e.target);
		const dif = index - startCard;
		if (dif > 0) handleCardClickPos(dif);
		else if (dif < 0) handleCardClickNeg(-dif);
	};

	useEffect(() => {
		if (!images) return;
		//images.style.transform = `translate(-${startCard * cardWidth - mobileDif}px)`;

		/* @ts-ignore */
		images.addEventListener("swiped", onSwipe);

		images.addEventListener("click", onMouseDown);

		window.addEventListener("resize", onResize);

		window.addEventListener("keydown", onKeyDown);

		return () => {
			images.removeEventListener("click", onMouseDown);
			/* @ts-ignore */
			images.removeEventListener("swiped", onSwipe);
			window.removeEventListener("resize", onResize);
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [images, cardWidth, mobileDif, animating, startCard]);

	useEffect(() => {
		if (!images) return;
		images.style.transform = `translate(-${startCard * cardWidth - mobileDif}px)`;
	}, [images, cardWidth, mobileDif]);

	useEffect(() => {
		if (ref.current) {
			const cards = ref.current.querySelector(`.${styles.cards}`) as HTMLDivElement;
			setImages(cards);

			const dots = ref.current.querySelector(`.${styles.dots}`) as HTMLDivElement;
			setDots(dots);
		}

		if (window.innerWidth < 1000) {
			setCardWidth(window.innerWidth * 0.8 + 10);
			setMobileDif(window.innerWidth * 0.1);
		} else {
			setCardWidth(460);
			setMobileDif(0);
		}
		document.querySelectorAll(`#projects .${styles.card}`).forEach((el) => {
			const cl = el.cloneNode(true) as HTMLDivElement;
			cl.classList.remove(styles.visible);
			setOriginals((old) => [...old, cl]);
		});
	}, []);

	useEffect(() => {
		if (!images) return;
		const firstCardClone = images.children[0].cloneNode(true);
		const lastCardClone = images.children[images.children.length - 1].cloneNode(true);

		images.insertBefore(lastCardClone, images.children[0]);
		images.appendChild(firstCardClone);
	}, [images]);

	const handlers = useSwipeable({
		onSwipedLeft: (eventData) => handleCardClickPos(1),
		onSwipedRight: (eventData) => handleCardClickNeg(1),
	});

	const cardsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!cardsRef.current) return;
		const cards = cardsRef.current.children;
		const startCard = Math.floor((cards.length + 1) / 2);
		setStartCard(startCard);
		cards[startCard - 1].classList.add(styles.visible);
	}, [cardsRef]);

	useEffect(() => {
		if (!dots || !images) return;
		const dotsChildren = dots.children;
		const selectedProject = images?.querySelector(`.${styles.visible}`);
		const selectedProjectIndex = (selectedProject?.getAttribute("data-index") || 0) as number;

		for (let i = 0; i < dotsChildren.length; i++) {
			dotsChildren[i].classList.remove(styles.active);
		}
		dotsChildren[selectedProjectIndex].classList.add(styles.active);
	}, [dots, images, animating]);

	useEffect(() => {
		if (!dots) return;

		Array.from(dots.children).forEach((dot: Element, i: number) => {
			dot.addEventListener("click", () => {
				if (!images || animating) return;

				const selectedProjects = images.querySelectorAll(`[data-index="${i}"]`);
				const selectedProject = selectedProjects[selectedProjects.length - 1];
				const currentProject = images.querySelector(`.${styles.visible}`);

				if (!selectedProject || !currentProject) return;

				// get currentProject index on its parent children
				const parent = currentProject.parentElement as HTMLDivElement;
				const currentProjectIndexOnParent = Array.prototype.slice
					.call(parent.children)
					.indexOf(currentProject);

				const selectedProjectIndexOnParent = Array.prototype.slice
					.call(parent.children)
					.indexOf(selectedProject);

				const dif = selectedProjectIndexOnParent - currentProjectIndexOnParent;

				if (dif > 0) handleCardClickPos(dif);
				else if (dif < 0) handleCardClickNeg(-dif);
			});
		});
	}, [dots]);

	return (
		<section id="projects" className={styles.projects} ref={ref}>
			<h2 className="spanText" ref={titleRef} aria-label="Proyectos">
				<span>P</span>
				<span>r</span>
				<span>o</span>
				<span>y</span>
				<span>e</span>
				<span>c</span>
				<span>t</span>
				<span>o</span>
				<span>s</span>
			</h2>

			<div id="carrousel" className={styles.carrousel} {...handlers}>
				<div ref={cardsRef} className={styles.cards} style={{ transform: "translate(-920px)" }}>
					{projects.map((project: Project, i: number) => (
						<Project
							key={project.title}
							title={project.title}
							description={project.description}
							stacks={project.stacks}
							image={project.image}
							link={project.link}
							download={project.download}
							index={i}
						/>
					))}
				</div>
				<div className={styles.navigation}>
					<button
						className={styles.arrow}
						onClick={() => handleCardClickNeg(1)}
						area-label="Proyecto anterior"
						title="Proyecto anterior"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="2"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
							/>
						</svg>
					</button>

					<div className={styles.dots}>
						{projects.map((project: Project, index: number) => (
							<div
								key={project.title}
								className={styles.dot + (index === 0 ? ` ${styles.active}` : "")}
							></div>
						))}
					</div>

					<button
						className={styles.arrow}
						onClick={() => handleCardClickPos(1)}
						area-label="Proyecto siguiente"
						title="Proyecto siguiente"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="2"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
}

type ProjectProps = {
	title: string;
	description: string;
	stacks: string[];
	image: string;
	link: string;
	download?: boolean;
	visible?: boolean;
	index: number;
};

function Project({
	title,
	description,
	stacks,
	image,
	link,
	download,
	visible,
	index,
}: ProjectProps) {
	return (
		<div className={styles.card + (visible ? ` ${styles.visible}` : "")} data-index={index}>
			<div className={styles["card-image-container"]}>
				<a
					className={styles["card-image-link"]}
					href={link}
					download={download}
					target="_blank"
					rel="noopener noreferrer"
					title={`link ${download ? "de descarga" : ""} a ${title} por nicolas halperin`}
				>
					<Image
						width={460}
						height={300}
						className={styles["card-image"]}
						src={image}
						alt={`${title} por nicolas halperin`}
						priority={false}
					/>
					<div className={styles.hover}>
						{download ? (
							<div className={styles["hover-content"]}>
								<span>Descargar</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className={styles["hover-icon"]}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
									/>
								</svg>
							</div>
						) : (
							<div className={styles["hover-content"]}>
								<span>Abrir</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className={styles["hover-icon"]}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
									/>
								</svg>
							</div>
						)}
					</div>
				</a>
			</div>
			<h3 className={styles["card-title"]}>{title}</h3>
			<p className={styles["card-description"]}>{description}</p>
			<div className={styles["card-stacks"]}>
				{stacks.map((stack) => (
					<div className={styles.chip} key={stack}>
						#{stack}
					</div>
				))}
			</div>
		</div>
	);
}
