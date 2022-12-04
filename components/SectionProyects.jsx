/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import useIntersectionObserver from "./../hooks/useIntersectionObserver";

import styles from "./SectionProyects.module.css";

export default function SectionProyects() {
	const [originals, setOriginals] = useState([]);
	const [images, setImages] = useState();
	const [startCard, setStartCard] = useState(1);
	const [cardWidth, setCardWidth] = useState();
	const [mobileDif, setMobileDif] = useState(0);
	const ref = useRef();
	const onScreen = useIntersectionObserver(ref, { rootMargin: "-150px" });

	const handleCardClickPos = (dif) => {
		const check = images.querySelectorAll(`.${styles.card}`)[
			images.querySelectorAll(`.${styles.card}`).length - 1
		];
		let currentOriginalPos =
			originals.findIndex(
				(original) =>
					original.querySelector(`.${styles["card-title"]}`).innerHTML ===
					check.querySelector(`.${styles["card-title"]}`).innerHTML
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
		}, 500);
	};

	const handleCardClickNeg = (dif) => {
		let currentCard = startCard;
		const check = images.querySelectorAll(`.${styles.card}`)[0];
		let currentOriginalNeg =
			originals.findIndex(
				(original) =>
					original.querySelector(`.${styles["card-title"]}`).innerHTML ===
					check.querySelector(`.${styles["card-title"]}`).innerHTML
			) - 1;
		if (currentOriginalNeg < 0) {
			currentOriginalNeg = originals.length - 1;
		}
		images.style.setProperty("pointer-events", "none");
		currentCard -= dif;

		images.children[currentCard + dif].classList.remove(styles.visible);
		images.children[currentCard].classList.add(styles.visible);

		for (var i = 0; i < dif; i++) {
			const clone = originals[currentOriginalNeg].cloneNode(true);
			images.insertBefore(clone, images.children[0]);
			currentOriginalNeg += 1;
			if (currentOriginalNeg > originals.length) {
				currentOriginalNeg = currentOriginalNeg - originals.length;
			}
		}
		images.style.transitionDuration = "0s";
		images.style.transform = `translate(-${(startCard + dif) * cardWidth - mobileDif}px)`;

		setTimeout(() => {
			images.style.transitionDuration = "0.5s";
			images.style.transform = `translate(-${startCard * cardWidth - mobileDif}px)`;
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
		if (onScreen) ref.current.classList.add(styles.visible);
	}, [onScreen]);

	useEffect(() => {
		if (!images) return;
		images.style.transform = `translate(-${startCard * cardWidth - mobileDif}px)`;

		const onSwipe = (e) => {
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
		images.addEventListener("swiped", onSwipe);

		const onMouseDown = (e) => {
			e.path.forEach((element) => {
				if (element.classList && element.classList.contains(styles.card)) {
					const children = Array.prototype.slice.call(images.children);
					const index = children.indexOf(element);
					const dif = index - startCard;
					if (dif > 0) handleCardClickPos(dif);
					else if (dif < 0) handleCardClickNeg(-dif);
				}
			});
		};
		images.addEventListener("mousedown", onMouseDown);

		const onResize = (e) => {
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
		window.addEventListener("resize", onResize);

		let animating = false;

		const onKeyDown = (e) => {
			if (animating) return;
			switch (e.keyCode) {
				case 37:
					animating = true;
					handleCardClickNeg(1);
					setTimeout(() => {
						animating = false;
					}, 600);
					break;
				case 39:
					animating = true;
					handleCardClickPos(1);
					setTimeout(() => {
						animating = false;
					}, 600);
					break;
				default:
					break;
			}
		};
		window.addEventListener("keydown", onKeyDown);

		return () => {
			images.removeEventListener("mousedown", onMouseDown);
			images.removeEventListener("swiped", onSwipe);
			window.removeEventListener("resize", onResize);
		};
	}, [images, cardWidth, mobileDif]);

	useEffect(() => {
		setImages(document.querySelector(`#proyects .${styles.cards}`));

		if (window.innerWidth < 1000) {
			setCardWidth(window.innerWidth * 0.8 + 10);
			setMobileDif(window.innerWidth * 0.1);
		} else {
			setCardWidth(460);
			setMobileDif(0);
		}
		document.querySelectorAll(`#proyects .${styles.card}`).forEach((el) => {
			const cl = el.cloneNode(true);
			cl.classList.remove(styles.visible);
			setOriginals((old) => [...old, cl]);
		});

		/* let sEvents = document.createElement("script");
		sEvents.src = "swiped-events.min.js";
		document.head.appendChild(sEvents); */
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

	const cardsRef = useRef(null);

	useEffect(() => {
		if (!cardsRef.current) return;
		const cards = cardsRef.current.children;
		const startCard = Math.floor((cards.length + 1) / 2);
		setStartCard(startCard);
		cards[startCard - 1].classList.add(styles.visible);
	}, [cardsRef]);

	return (
		<section id="proyects" className={styles.proyects} ref={ref}>
			<h2 className="spanText">
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
					<Project
						title="Kubikware"
						description="Recreación de la página de kubikware."
						stacks={["HTML", "CSS", "JS"]}
						link="https://kubikware.netlify.app/"
						image={"/img/kubikware-remake.png"}
					/>
					<Project
						title="RL Stats"
						description="Una aplicación móvil que da acceso a cualquier persona a sus rangos de Rocket League
						desde su teléfono. Esta aplicación está pensada para todos los jugadores de Rocket
						League, aqui podran seguir su progreso, encontrar sus rangos, sus estadisticas y sus
						partidos jugados. La solución consiste en 4 páginas, un inicio de sesión, una pagina
						principal, una de estadisticas y una de partidos."
						stacks={["Flutter", "Dart", "RestAPI"]}
						link="https://play.google.com/store/apps/details?id=com.drogebot.rocketleaguestats"
						image={"/img/rocket stats.png"}
					/>
					<Project
						title="Satellites On Fire"
						description="Satellites On Fire es un sistema de detección en tiempo real de focos de calor, los cuales contemplan distintos niveles de probabilidad de ser incendios. El usuario puede observarlos en tiempo real, teniendo también la posibilidad de ver focos pasados. Adicionalmente, brindamos un sistema de alertas para que los usuarios puedan recibir notificaciones de los últimos focos detectados en sus zonas, permitiendoles actuar a tiempo, reduciendo costos causados por la propagación de los incendios."
						stacks={["Front-end dev", "React", "Material-UI"]}
						link="https://www.satellitesonfire.com/"
						image={"/img/sof.png"}
					/>
					<Project
						title="Zerti"
						description="Zerti es un proyecto Web3 cuyo objetivo central es asegurar la validez y confianza de las certificaciones, aptitudes y títulos emitidos por las instituciones académicas, organizaciones y empresas, basándose en la inmutabilidad y transparencia de la tecnología blockchain."
						stacks={["React", "Web3", "NodeJs"]}
						link="https://zerti.com.ar/"
						image={"/img/zerti.png"}
					/>
					<Project
						title="InFocus"
						description="Una página web que brinda herramientas de ayuda a jóvenes y adultos en etapa laboral
							con déficit de atención. Se brindan herramientas tales como recordatorios,
							organizadores, una sección de estudio (donde puedas establecer un tiempo de trabajo y
							te dé tiempos de recreo en proporción al trabajo y que te vaya guiando para que puedas
							lograr un estudio efectivo), una sección de ejercicios de relajación y por último una
							sección de notas para cuando el usuario esté en la escuela/trabajo, pueda tomar sus
							apuntes y tener todo organizado."
						stacks={["React", "NodeJs", "Express"]}
						link="https://infocusapp.netlify.app"
						image={"/img/infocus.png"}
					/>
					<Project
						title="Calcular Fechas"
						description="Una aplicación móvil para ver tus eventos de una forma más divertida. Podrás crear 2
							tipos de eventos, pasados o futuros. Para los eventos futuros, podrás ponerle un
							título y activar un recordatorio para el momento del evento o para un tiempo antes.
							Cuando ya lo tengas creado, podrás acceder a una pantalla donde hay una cuenta
							regresiva para el evento. Para los eventos pasados, vas a poder ver el tiempo que pasó
							desde la fecha indicada de una manera distinta. Podrás ver la cantidad exacta que pasó
							de cada medida de tiempo, por ejemplo, te dirá la cantidad de segundos que pasaron
							desde que naciste."
						stacks={["Android", "Kotlin", "Native App"]}
						link="/files/CalcularFechas.apk"
						download={true}
						image={"/img/calcular-fechas.png"}
					/>
					<Project
						title="Wordle Infinito"
						description="Clásico juego de Wordle pero sacando la necesidad de esperar 24 horas para poder jugar con otra palabra."
						stacks={["HTML", "CSS", "JS"]}
						link="https://wordle.nicohalpe.com.ar/"
						image={"/img/wordle.png"}
					/>

					{/* <Project title="" description="" stacks={["", "", ""]} link="" image={"/img/.png"} /> */}
				</div>
			</div>
		</section>
	);
}

function Project({ title, description, stacks, image, link, download, visible }) {
	return (
		<div className={styles.card + (visible ? ` ${styles.visible}` : "")}>
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
						style={{
							objectPosition: 0,
						}}
						alt={`${title} por nicolas halperin`}
					/>
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
