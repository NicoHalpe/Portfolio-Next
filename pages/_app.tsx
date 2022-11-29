import type { AppProps } from "next/app";

import "../styles/globals.css";

import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
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
	return <Component {...pageProps} />;
}