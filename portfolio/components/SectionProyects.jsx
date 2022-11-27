/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
/* import "./SectionProyects.css"; */
import useIntersectionObserver from "./../hooks/useIntersectionObserver";

export default function SectionProyects() {
	const [originals, setOriginals] = useState([]);
	const [images, setImages] = useState();
	const startCard = 3;
	const [cardWidth, setCardWidth] = useState();
	const [mobileDif, setMobileDif] = useState(0);
	const ref = useRef();
	const onScreen = useIntersectionObserver(ref, { rootMargin: "-150px" });

	useEffect(() => {
		if (onScreen) ref.current.classList.add("visible");
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
				if (element.classList && element.classList.contains("card")) {
					const children = Array.prototype.slice.call(images.children);
					const index = children.indexOf(element);
					const dif = index - startCard;
					if (dif > 0) handleCardClickPos(dif);
					else if (dif < 0) handleCardClickNeg(-dif);
				}
			});
		};
		images.addEventListener("mousedown", onMouseDown);

		const handleCardClickPos = (dif) => {
			const check = images.querySelectorAll(".card")[images.querySelectorAll(".card").length - 1];
			let currentOriginalPos =
				originals.findIndex(
					(original) =>
						original.querySelector(".card-title").innerHTML ===
						check.querySelector(".card-title").innerHTML
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
			images.children[currentCard].classList.add("visible");
			images.children[currentCard - dif].classList.remove("visible");

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
			const check = images.querySelectorAll(".card")[0];
			let currentOriginalNeg =
				originals.findIndex(
					(original) =>
						original.querySelector(".card-title").innerHTML ===
						check.querySelector(".card-title").innerHTML
				) - 1;
			if (currentOriginalNeg < 0) {
				currentOriginalNeg = originals.length - 1;
			}
			images.style.setProperty("pointer-events", "none");
			currentCard -= dif;

			images.children[currentCard + dif].classList.remove("visible");
			images.children[currentCard].classList.add("visible");

			for (var i = 0; i < dif; i++) {
				const clone = originals[currentOriginalNeg].cloneNode(true);
				images.insertBefore(clone, images.children[0]);
				currentOriginalNeg += 1;
				if (currentOriginalNeg > originals.length) {
					currentOriginalNeg = currentOriginalNeg - originals.length;
				}
			}
			images.style.transitionDuration = "0s";
			images.style.transform = `translate(-${(3 + dif) * cardWidth - mobileDif}px)`;

			setTimeout(() => {
				images.style.transitionDuration = "0.5s";
				images.style.transform = `translate(-${3 * cardWidth - mobileDif}px)`;
			}, 10);

			setTimeout(() => {
				images.style.setProperty("pointer-events", "all");
				currentCard += dif;
				for (var i = 0; i < dif; i++) {
					images.children[images.children.length - 1].remove();
				}
			}, 500);
		};

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
		setImages(document.querySelector("#proyects .cards"));

		if (window.innerWidth < 1000) {
			setCardWidth(window.innerWidth * 0.8 + 10);
			setMobileDif(window.innerWidth * 0.1);
		} else {
			setCardWidth(460);
			setMobileDif(0);
		}
		document.querySelectorAll("#proyects .card").forEach((el) => {
			const cl = el.cloneNode(true);
			cl.classList.remove("visible");
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

	return (
		<section id="proyects" ref={ref}>
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

			<div id="carrousel" className="carrousel">
				<div className="cards" style={{ transform: "translate(-920px)" }}>
					<div className="card">
						<div className="card-image-container">
							<a
								className="card-image-link"
								href="https://kubikware.netlify.app"
								target="_blank"
								rel="noopener noreferrer"
								title="link a kubikware por nicolas halperin"
							>
								<Image
									width={460}
									height={300}
									className="card-image"
									src="/img/kubikware-remake.png"
									style={{ objectPosition: 0 }}
									alt="kubikware por nicolas halperin"
								/>
							</a>
						</div>
						<h3 className="card-title">Kubikware</h3>
						<p className="card-description">Recreación de la página de kubikware.</p>
						<div className="card-stacks">
							<div className="chip">#HTML</div>
							<div className="chip">#CSS</div>
							<div className="chip">#JS</div>
						</div>
					</div>
					<div className="card">
						<div className="card-image-container">
							<a
								className="card-image-link"
								href="https://play.google.com/store/apps/details?id=com.drogebot.rocketleaguestats"
								target="_blank"
								rel="noopener noreferrer"
								title="link a rocket stats por nicolas halperin"
							>
								<Image
									width={460}
									height={300}
									className="card-image"
									src="/img/rocket stats.png"
									alt="rocket stats por nicolas halperin"
								/>
							</a>
						</div>
						<h3 className="card-title">RL Stats</h3>
						<p className="card-description">
							Una aplicación móvil que da acceso a cualquier persona a sus rangos de Rocket League
							desde su teléfono. Esta aplicación está pensada para todos los jugadores de Rocket
							League, aqui podran seguir su progreso, encontrar sus rangos, sus estadisticas y sus
							partidos jugados. La solución consiste en 4 páginas, un inicio de sesión, una pagina
							principal, una de estadisticas y una de partidos.
						</p>
						<div className="card-stacks">
							<div className="chip">#Flutter</div>
							<div className="chip">#Dart</div>
							<div className="chip">#RestAPI</div>
						</div>
					</div>
					<div className="card visible">
						<div className="card-image-container">
							<a
								className="card-image-link"
								href="https://infocusapp.netlify.app"
								target="_blank"
								rel="noopener noreferrer"
								title="link a infocus por nicolas halperin y 3 más"
							>
								<Image
									width={460}
									height={300}
									className="card-image"
									src="/img/infocus.png"
									alt="infocus por nicolas halperin y 3 más"
								/>
							</a>
						</div>
						<h3 className="card-title">InFocus</h3>
						<p className="card-description">
							Una página web que brinda herramientas de ayuda a jóvenes y adultos en etapa laboral
							con déficit de atención. Se brindan herramientas tales como recordatorios,
							organizadores, una sección de estudio (donde puedas establecer un tiempo de trabajo y
							te dé tiempos de recreo en proporción al trabajo y que te vaya guiando para que puedas
							lograr un estudio efectivo), una sección de ejercicios de relajación y por último una
							sección de notas para cuando el usuario esté en la escuela/trabajo, pueda tomar sus
							apuntes y tener todo organizado.
						</p>
						<div className="card-stacks">
							<div className="chip">#React</div>
							<div className="chip">#NodeJs</div>
							<div className="chip">#Express</div>
						</div>
					</div>
					<div className="card">
						<div className="card-image-container">
							<a
								className="card-image-link"
								href="/files/CalcularFechas.apk"
								download
								title="link de descarga de calcular fechas por nicolas halperin"
							>
								<Image
									width={460}
									height={300}
									className="card-image"
									src="/img/calcular-fechas.png"
									alt="calcular fechas por nicolas halperin"
								/>
							</a>
						</div>
						<h3 className="card-title">Calcular Fechas</h3>
						<p className="card-description">
							Una aplicación móvil para ver tus eventos de una forma más divertida. Podrás crear 2
							tipos de eventos, pasados o futuros. Para los eventos futuros, podrás ponerle un
							título y activar un recordatorio para el momento del evento o para un tiempo antes.
							Cuando ya lo tengas creado, podrás acceder a una pantalla donde hay una cuenta
							regresiva para el evento. Para los eventos pasados, vas a poder ver el tiempo que pasó
							desde la fecha indicada de una manera distinta. Podrás ver la cantidad exacta que pasó
							de cada medida de tiempo, por ejemplo, te dirá la cantidad de segundos que pasaron
							desde que naciste.
						</p>
						<div className="card-stacks">
							<div className="chip">#Android</div>
							<div className="chip">#Kotlin</div>
							<div className="chip">#Native App</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
