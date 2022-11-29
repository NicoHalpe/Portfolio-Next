import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";
import SectionMe from "./../components/SectionMe";

/* const SectionAbout = dynamic(() => import("./../components/SectionAbout"));
const SectionSkills = dynamic(() => import("./../components/SectionSkills"));
const SectionProyects = dynamic(() => import("./../components/SectionProyects"));
const SectionContact = dynamic(() => import("./../components/SectionContact")); */
import SectionAbout from "./../components/SectionAbout";
import SectionSkills from "./../components/SectionSkills";
import SectionProyects from "./../components/SectionProyects";
import SectionContact from "./../components/SectionContact";

export default function Home() {
	useEffect(() => {
		document.querySelectorAll("a").forEach((el) => {
			el.addEventListener("click", (e) => {
				const href = el.getAttribute("href");
				if (href?.includes("#")) {
					e.preventDefault();
					document.querySelector(href)?.scrollIntoView();
				}
			});
		});

		/* document.querySelectorAll(`object[data-src]`).forEach((element) => {
			element.data = element.getAttribute("data-src");
			element.removeAttribute("data-src");
		}); */
	}, []);

	return (
		<>
			<Head>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="Soy Nico Halperin, Full Stack Developer y Software Developer. Este es mi portafolio."
				/>
				<meta name="title" content="Nicolas Halperin | Full Stack Developer" />
				<meta name="author" content="Nicolas Halperin" />
				<meta name="publisher" content="Nicolas Halperin" />
				<meta name="og:locale" content="es_AR" />
				<meta name="og:url" content="https://nicohalpe.com.ar/" />
				<meta name="og:title" content="Nicolas Halperin" />
				<meta
					name="og:description"
					content="Soy Nico Halperin, Full stack developer y Software developer. Este es mi portafolio."
				/>
				<meta name="og:site_name" content="Nicolas Halperin" />
				<meta name="og:image" content="https://nicohalpe.com.ar/img/demo.png" />
				<meta name="og:image:secure_url" content="https://nicohalpe.com.ar/img/demo.png" />
				<meta name="og:type" content="profile" />
				<meta name="og:image:width" content="1657" />
				<meta name="og:image:height" content="911" />

				<link rel="canonical" href="https://nicohalpe.com.ar/" />

				<script type="application/ld+json">
					{`{
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Nicolas Halperin",
            "url": "https://nicohalpe.com.ar",
            "sameAs": [
              "https://www.linkedin.com/in/nicolas-halperin/",
              "https://twitter.com/nico_halpe",
              "https://facebook.com/nico.halperin.7",
              "https://www.instagram.com/nico_halpe/",
              "https://github.com/NicoHalpe"
            ]
			    }`}
				</script>

				<link
					rel="shortcut icon"
					href="https://nicohalpe.com.ar/img/avatar.svg"
					type="image/x-icon"
				/>
				<link rel="manifest" href="manifest.json" />
				<link rel="apple-touch-icon" href="https://nicohalpe.com.ar/img/avatar192.png" />
				<meta name="theme-color" content="#000000" />

				<title>Nicolas Halperin</title>
			</Head>

			<SectionMe />
			<SectionAbout />
			<SectionSkills />
			<SectionProyects />
			<SectionContact />
		</>
	);
}
