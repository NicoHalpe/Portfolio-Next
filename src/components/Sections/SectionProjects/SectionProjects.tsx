import React, { useEffect, useRef } from "react";

import styles from "./SectionProjects.module.css";
import useBouncingAnimation from "hooks/useBouncingAnimation";
import projects from "constants/projects";
import { ProjectsCarousel } from "components";
import useIntersectionObserver from "hooks/useIntersectionObserver";

export default function SectionProjects() {
	const ref = useRef<HTMLElement>(null);
	const onScreen = useIntersectionObserver(ref, { rootMargin: "-150px" });

	const titleRef = useRef<HTMLHeadingElement>(null);
	useBouncingAnimation(titleRef);

	useEffect(() => {
		if (onScreen) ref.current?.classList.add(styles.visible);
	}, [onScreen]);

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

			<ProjectsCarousel projects={projects} options={{ loop: true }} />
		</section>
	);
}
