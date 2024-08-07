import Head from "next/head";
import { useEffect } from "react";

import SectionMe from "components/Sections/SectionMe/SectionMe";
import SectionAbout from "components/Sections/SectionAbout/SectionAbout";
import SectionSkills from "components/Sections/SectionSkills/SectionSkills";
import SectionProjects from "components/Sections/SectionProjects/SectionProjects";
import SectionContact from "components/Sections/SectionContact/SectionContact";
import { Navbar } from "components";

export default function Home() {
	useEffect(() => {
		document.querySelectorAll("a").forEach((el) => {
			el.addEventListener("click", (e) => {
				const href = el.getAttribute("href");
				if (href?.includes("#")) {
					e.preventDefault();
					document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
				}
			});
		});
	}, []);

	return (
		<>
			<Head>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="Soy Nico Halperin, Full Stack & Web3 Developer. Este es mi portafolio."
				/>
				<meta name="title" content="Nicolas Halperin | Full Stack Developer" />
				<meta name="author" content="Nicolas Halperin" />
				<meta name="publisher" content="Nicolas Halperin" />
				<meta name="og:locale" content="es_AR" />
				<meta name="og:url" content="https://nicohalpe.com.ar/" />
				<meta name="og:title" content="Nicolas Halperin" />
				<meta
					name="og:description"
					content="Soy Nico Halperin, Full Stack & Web3 Developer. Este es mi portafolio."
				/>
				<meta name="og:site_name" content="Nicolas Halperin" />
				<meta name="og:image" content="https://nicohalpe.com.ar/img/demo.png" />
				<meta name="og:image:secure_url" content="https://nicohalpe.com.ar/img/demo.png" />
				<meta name="og:type" content="website" />

				<link rel="canonical" href="https://nicohalpe.com.ar/" />

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: `{
					"@context": "http://schema.org",
					"@type": "Person",
					"name": "Nicolas Halperin",
					"url": "https://nicohalpe.com.ar",
					"sameAs": [
						"https://www.linkedin.com/in/nicolas-halperin/",
						"https://twitter.com/nico_halpe",
						"https://www.facebook.com/nicolas.halperin/",
						"https://www.instagram.com/nico_halpe/",
						"https://github.com/NicoHalpe"
					]
			    }`,
					}}
				></script>

				<link
					rel="shortcut icon"
					href="https://nicohalpe.com.ar/img/avatar.svg"
					type="image/x-icon"
				/>
				<link rel="manifest" href="manifest.json" />
				<link rel="apple-touch-icon" href="https://nicohalpe.com.ar/img/avatar192.png" />
				<meta name="theme-color" content="#000000" />

				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

				<title>Nicolas Halperin</title>
			</Head>

			<Navbar />
			<SectionMe />
			<SectionAbout />
			<SectionSkills />
			<SectionProjects />
			<SectionContact />
		</>
	);
}
