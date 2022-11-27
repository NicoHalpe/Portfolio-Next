import '../styles/globals.css'
import "../components/SectionAbout.css";
import "../components/SectionContact.css";
import "../components/SectionMe.css";
import "../components/SectionProyects.css";
import "../components/SectionSkills.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
		const theme = document.documentElement.getAttribute("theme");
		if (!theme) document.documentElement.setAttribute("theme", "dark");

    if ("serviceWorker" in window.navigator) {
      window.navigator.serviceWorker
        .register("worker.js")
        .then(
          function (registration) {},
          function (err) {}
        )
        .catch(function (err) {});
    }
	}, []);

  return <Component {...pageProps} />
}

export default MyApp
