import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useDotButton } from "hooks/useDotButton";
import { usePrevNextButtons } from "hooks/usePrevNextButtons";
import { Project } from "components";
import styles from "./ProjectsCarousel.module.css";

type ProjectType = {
	title: string;
	description: string;
	stacks: string[];
	image: string;
	link: string;
	download?: boolean;
};

type Props = {
	projects: ProjectType[];
	options?: EmblaOptionsType;
};

const ProjectsCarousel = ({ projects, options }: Props) => {
	const [emblaRef, emblaApi] = useEmblaCarousel(options);

	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

	const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
		usePrevNextButtons(emblaApi);

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			switch (e.keyCode) {
				case 37:
					onPrevButtonClick();
					break;
				case 39:
					onNextButtonClick();
					break;
				default:
					break;
			}
		};
		window.addEventListener("keydown", onKeyDown);

		return () => {
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [onPrevButtonClick, onNextButtonClick]);

	return (
		<div className={styles.embla}>
			<div className={styles.embla__viewport} ref={emblaRef}>
				<div className={styles.embla__container}>
					{projects.map((project, i: number) => (
						<div className={styles.embla__slide} key={i}>
							<Project
								key={project.title}
								title={project.title}
								description={project.description}
								stacks={project.stacks}
								image={project.image}
								link={project.link}
								download={project.download}
								selected={i === selectedIndex}
								onClick={() => onDotButtonClick(i)}
							/>
						</div>
					))}
				</div>
			</div>

			<div className={styles.navigation}>
				<button
					className={styles.arrow}
					onClick={onPrevButtonClick}
					disabled={prevBtnDisabled}
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
					{scrollSnaps.map((_, index: number) => (
						<div
							key={index}
							className={styles.dot + (index === selectedIndex ? ` ${styles.active}` : "")}
							onClick={() => onDotButtonClick(index)}
						></div>
					))}
				</div>

				<button
					className={styles.arrow}
					onClick={onNextButtonClick}
					disabled={nextBtnDisabled}
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

			{/* <div className={styles.embla__buttons}>
				<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
				<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
			</div>

			<div className={styles.embla__dots}>
				{scrollSnaps.map((_, index) => (
					<DotButton
						key={index}
						onClick={() => onDotButtonClick(index)}
						className={`${styles.embla__dot} ${
							index === selectedIndex ? styles["embla__dot--selected"] : ""
						}`}
					/>
				))}
			</div> */}
		</div>
	);
};

export default ProjectsCarousel;
