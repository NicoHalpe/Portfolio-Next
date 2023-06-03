import React, { useEffect, useRef } from "react";
import useIntersectionObserver from "./../hooks/useIntersectionObserver";
import { useForm, ValidationError } from "@formspree/react";

import styles from "./SectionContact.module.css";

export default function SectionContact() {
	const ref = useRef();
	const submitMsgRef = useRef();
	const formRef = useRef();
	const onScreen = useIntersectionObserver(ref, { rootMargin: "-150px" });

	const [formState, submitForm] = useForm(process.env.NEXT_PUBLIC_FORM || "xnqyknlo");

	useEffect(() => {
		if (!formState.succeeded) return;
		formRef.current.reset();
		submitMsgRef.current.classList.add(styles.visible);
		setTimeout(() => {
			submitMsgRef.current.classList.remove(styles.visible);
			submitMsgRef.current.classList.add(styles.leave);
			setTimeout(() => {
				submitMsgRef.current.classList.remove(styles.leave);
			}, 800);
		}, 3000);
	}, [formState.succeeded]);

	useEffect(() => {
		if (onScreen) ref.current.classList.add(styles.visible);
	}, [onScreen]);

	/* useEffect(() => {
		const handleSubmit = (e) => {
			e.preventDefault();
			let form = document.getElementById("contact-form");
			let formData = new FormData(form);
			fetch("/submit", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams(formData).toString(),
			})
				.then(() => {
					form.reset();
					submitMsgRef.current.classList.add(styles.visible);
					setTimeout(() => {
						submitMsgRef.current.classList.remove(styles.visible);
						submitMsgRef.current.classList.add(styles.leave);
						setTimeout(() => {
							submitMsgRef.current.classList.remove(styles.leave);
						}, 800);
					}, 3000);
				})
				.catch((error) => alert(error));
		};

		document.querySelector("form").addEventListener("submit", handleSubmit);
	}, []); */

	return (
		<section id="contact" className={styles.contact} ref={ref}>
			<h2 className="spanText">
				<span>C</span>
				<span>o</span>
				<span>n</span>
				<span>t</span>
				<span>a</span>
				<span>c</span>
				<span>t</span>
				<span>a</span>
				<span>m</span>
				<span>e</span>
			</h2>
			<div className={styles.content}>
				<form ref={formRef} className={styles.form} name="contact" onSubmit={submitForm}>
					<div className={styles.col}>
						<input placeholder="Nombre" type="text" name="nombre" id="nombre" />
						<ValidationError prefix="Nombre" field="nombre" errors={formState.errors} />
						<input placeholder="Email" type="email" name="email" id="email" />
						<ValidationError prefix="Email" field="email" errors={formState.errors} />
					</div>
					<input placeholder="Asunto" type="text" name="asunto" id="asunto" />
					<ValidationError prefix="Asunto" field="asunto" errors={formState.errors} />
					<textarea placeholder="Mensaje" name="mensaje" id="mensaje" rows="8"></textarea>
					<ValidationError prefix="Mensaje" field="mensaje" errors={formState.errors} />
					<button type="submit" disabled={formState.submitting}>
						¡Enviar!
					</button>
					<ValidationError errors={formState.errors} />
				</form>
				<div className={styles.socials}>
					<a
						href="https://www.linkedin.com/in/nicolas-halperin/"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.row}
						title="linkedin de nicolas halperin"
					>
						<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
							<mask id="mask">
								<rect x="0" y="0" width="60" height="60" fill="#fff" />
								<path
									d="M19.6261 48.3501V23.8424H11.4802V48.3501H19.627H19.6261ZM15.5548 20.4969C18.3949 20.4969 20.1631 18.615 20.1631 16.2631C20.1099 13.8577 18.3949 12.0283 15.6089 12.0283C12.8209 12.0283 11 13.8577 11 16.2629C11 18.6148 12.7675 20.4967 15.5015 20.4967H15.5542L15.5548 20.4969ZM24.1351 48.3501H32.2804V34.6654C32.2804 33.9339 32.3336 33.2005 32.5488 32.678C33.1374 31.2139 34.4777 29.6984 36.7285 29.6984C39.6753 29.6984 40.8549 31.9457 40.8549 35.2406V48.3501H49V34.2981C49 26.7707 44.9819 23.2679 39.6226 23.2679C35.2287 23.2679 33.299 25.7237 32.2268 27.3963H32.281V23.8433H24.1355C24.2418 26.1424 24.1348 48.351 24.1348 48.351L24.1351 48.3501Z"
									fill="#000"
								/>
							</mask>
							<path
								mask="url(#mask)"
								d="M7 10.2518C7 8.47254 8.48957 7.02832 10.3258 7.02832H48.6742C50.5111 7.02832 52 8.47254 52 10.2518V48.8054C52 50.5852 50.5111 52.0283 48.6742 52.0283H10.3258C8.48975 52.0283 7 50.5853 7 48.8059V10.2513V10.2518Z"
								fill="inherit"
							/>
						</svg>
						<span aria-label="nicolas halperin">Nicolas Halperin</span>
					</a>
					<a
						href="https://github.com/NicoHalpe"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.row}
						title="github de nicolas halperin"
					>
						<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M30.065 5C17.8323 4.99843 7.40453 13.87 5.44599 25.9448C3.48745 38.0197 10.5765 49.7324 22.1825 53.5975C23.4325 53.8225 23.88 53.055 23.88 52.395C23.88 51.8025 23.86 50.2325 23.8525 48.145C16.915 49.645 15.45 44.8 15.45 44.8C14.9933 43.2924 14.0114 41.9983 12.6825 41.1525C10.4325 39.605 12.855 39.64 12.855 39.64C14.4567 39.8596 15.8664 40.8086 16.6725 42.21C17.3548 43.4506 18.5044 44.3674 19.8658 44.7566C21.2271 45.1457 22.6875 44.9751 23.9225 44.2825C24.0385 43.0175 24.6013 41.8352 25.51 40.9475C19.975 40.32 14.155 38.18 14.155 28.6225C14.1243 26.1505 15.0422 23.7607 16.72 21.945C15.9609 19.7933 16.0503 17.4331 16.97 15.345C16.97 15.345 19.0625 14.6725 23.825 17.8975C27.9096 16.7775 32.2204 16.7775 36.305 17.8975C41.07 14.67 43.16 15.345 43.16 15.345C44.084 17.4321 44.1734 19.7939 43.41 21.945C45.0939 23.7606 46.0111 26.1566 45.97 28.6325C45.97 38.215 40.145 40.32 34.59 40.9375C35.7883 42.1626 36.4029 43.8433 36.2775 45.5525C36.2775 48.8875 36.2475 51.5775 36.2475 52.395C36.2475 53.0625 36.6925 53.8375 37.965 53.5925C49.5662 49.7209 56.6476 38.0074 54.685 25.9358C52.7225 13.8641 42.2951 4.9972 30.065 5Z"
								fill="inherit"
							/>
						</svg>
						<span aria-label="nicohalpe">NicoHalpe</span>
					</a>
					<a
						href="https://discord.com/users/463392417782038569"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.row}
						title="discord de nicolas halperin"
					>
						<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M45.0944 15.8433C42.2263 14.5272 39.1506 13.5577 35.9348 13.0023C35.8762 12.9916 35.8177 13.0184 35.7876 13.072C35.392 13.7755 34.9539 14.6933 34.647 15.4147C31.1883 14.8969 27.7472 14.8969 24.3594 15.4147C24.0525 14.6773 23.5984 13.7755 23.2011 13.072C23.1709 13.0202 23.1124 12.9934 23.0538 13.0023C19.8398 13.5559 16.7642 14.5255 13.8943 15.8433C13.8694 15.854 13.8481 15.8719 13.834 15.8951C8.00011 24.6107 6.40197 33.1122 7.18596 41.5082C7.18951 41.5493 7.21257 41.5886 7.2445 41.6136C11.0935 44.4402 14.822 46.1562 18.4811 47.2936C18.5397 47.3115 18.6018 47.2901 18.639 47.2419C19.5046 46.0598 20.2762 44.8134 20.9378 43.5027C20.9768 43.426 20.9395 43.3349 20.8597 43.3046C19.6359 42.8403 18.4705 42.2742 17.3495 41.6314C17.2608 41.5797 17.2537 41.4528 17.3353 41.3921C17.5712 41.2153 17.8072 41.0314 18.0324 40.8457C18.0732 40.8118 18.13 40.8046 18.1779 40.8261C25.5424 44.1885 33.5154 44.1885 40.793 40.8261C40.841 40.8029 40.8977 40.81 40.9403 40.8439C41.1656 41.0296 41.4015 41.2153 41.6392 41.3921C41.7207 41.4528 41.7154 41.5797 41.6267 41.6314C40.5057 42.2867 39.3404 42.8403 38.1147 43.3028C38.0349 43.3331 37.9994 43.426 38.0385 43.5027C38.7142 44.8116 39.4858 46.058 40.3354 47.2401C40.3709 47.2901 40.4347 47.3115 40.4933 47.2936C44.1703 46.1562 47.8987 44.4402 51.7477 41.6136C51.7814 41.5886 51.8027 41.5511 51.8062 41.51C52.7445 31.8033 50.2347 23.3715 45.1529 15.8968C45.1405 15.8719 45.1192 15.854 45.0944 15.8433ZM22.0375 36.3959C19.8203 36.3959 17.9934 34.3603 17.9934 31.8604C17.9934 29.3605 19.7849 27.3249 22.0375 27.3249C24.3079 27.3249 26.1171 29.3784 26.0816 31.8604C26.0816 34.3603 24.2901 36.3959 22.0375 36.3959ZM36.9902 36.3959C34.773 36.3959 32.946 34.3603 32.946 31.8604C32.946 29.3605 34.7375 27.3249 36.9902 27.3249C39.2606 27.3249 41.0698 29.3784 41.0343 31.8604C41.0343 34.3603 39.2606 36.3959 36.9902 36.3959Z"
								fill="inherit"
							/>
						</svg>
						<span>Halpe#9999</span>
					</a>
					<a
						href="https://www.instagram.com/nico_halpe/"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.row}
						title="instagram de nicolas halperin"
					>
						<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M30.005 52.6027C23.855 52.6027 23.13 52.5702 20.73 52.4652C18.8584 52.4037 17.0111 52.0232 15.2675 51.3402C12.2508 50.1662 9.86536 47.7799 8.6925 44.7627C8.03577 43.0128 7.68155 41.1639 7.645 39.2952C7.505 36.9002 7.505 36.1152 7.505 30.0127C7.505 23.8452 7.5375 23.1252 7.645 20.7377C7.68235 18.8715 8.03656 17.0252 8.6925 15.2777C9.86408 12.2565 12.2534 9.86813 15.275 8.6977C17.0216 8.0382 18.8684 7.68306 20.735 7.6477C23.1225 7.5127 23.9075 7.5127 30.005 7.5127C36.205 7.5127 36.9175 7.5452 39.28 7.6477C41.1515 7.68336 43.0031 8.03847 44.755 8.6977C47.7758 9.86945 50.1646 12.2574 51.3375 15.2777C52.0053 17.0507 52.3614 18.9258 52.39 20.8202C52.53 23.2152 52.53 23.9977 52.53 30.0977C52.53 36.1977 52.495 36.9977 52.39 39.3652C52.3528 41.2357 51.9977 43.0862 51.34 44.8377C50.1642 47.857 47.7752 50.2441 44.755 51.4177C43.0056 52.0732 41.1578 52.4274 39.29 52.4652C36.9025 52.6027 36.12 52.6027 30.005 52.6027ZM29.92 11.4702C23.805 11.4702 23.17 11.5002 20.7825 11.6077C19.3575 11.6266 17.9462 11.8895 16.61 12.3852C14.6369 13.1402 13.0756 14.6952 12.3125 16.6652C11.813 18.0159 11.55 19.4426 11.535 20.8827C11.4025 23.3052 11.4025 23.9402 11.4025 30.0127C11.4025 36.0127 11.425 36.7402 11.535 39.1477C11.5574 40.5732 11.8202 41.9847 12.3125 43.3227C13.0767 45.2914 14.6377 46.8452 16.61 47.6002C17.9453 48.0991 19.3571 48.3622 20.7825 48.3777C23.2025 48.5177 23.84 48.5177 29.92 48.5177C36.0525 48.5177 36.6875 48.4877 39.055 48.3777C40.481 48.3603 41.8933 48.0973 43.23 47.6002C45.1912 46.8387 46.7423 45.2884 47.505 43.3277C48.0035 41.9758 48.2665 40.5485 48.2825 39.1077H48.31C48.4175 36.7177 48.4175 36.0802 48.4175 29.9727C48.4175 23.8652 48.39 23.2227 48.2825 20.8352C48.2601 19.4113 47.9972 18.0015 47.505 16.6652C46.7441 14.7016 45.1927 13.1484 43.23 12.3852C41.8936 11.887 40.4811 11.624 39.055 11.6077C36.6375 11.4702 36.005 11.4702 29.92 11.4702ZM30.005 41.5602C25.33 41.5632 21.1136 38.7495 19.3222 34.4313C17.5308 30.1131 18.5173 25.141 21.8216 21.8338C25.1259 18.5267 30.0972 17.5359 34.4169 19.3235C38.7366 21.1112 41.554 25.3252 41.555 30.0002C41.5481 36.3779 36.3827 41.5478 30.005 41.5602ZM30.005 22.4952C25.8629 22.4952 22.505 25.8531 22.505 29.9952C22.505 34.1373 25.8629 37.4952 30.005 37.4952C34.1471 37.4952 37.505 34.1373 37.505 29.9952C37.4954 25.8571 34.1431 22.5048 30.005 22.4952ZM42.005 20.7127C40.5186 20.7072 39.3173 19.4992 39.32 18.0127C39.3228 16.5263 40.5285 15.3227 42.015 15.3227C43.5015 15.3227 44.7072 16.5262 44.71 18.0127C44.7107 18.7299 44.4257 19.4178 43.9182 19.9244C43.4106 20.431 42.7222 20.7147 42.005 20.7127Z"
								fill="inherit"
							/>
						</svg>
						<span>nico_halpe</span>
					</a>
					<a
						href="mailto:nicolas.halperin5@gmail.com"
						className={styles.row}
						target="_blank"
						rel="noopener noreferrer"
						title="mail de nicolas halperin"
					>
						<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M50 50H10C7.23858 50 5 47.7614 5 45V14.7825C5.11652 12.1064 7.32133 9.99747 10 10H50C52.7614 10 55 12.2386 55 15V45C55 47.7614 52.7614 50 50 50ZM10 19.67V45H50V19.67L30 33L10 19.67ZM12 15L30 27L48 15H12Z"
								fill="inherit"
							/>
						</svg>
						<span>nicolas.halperin5@gmail.com</span>
					</a>
					<a
						href="https://join.skype.com/invite/hoBL2uXuDtuM"
						className={styles.row}
						target="_blank"
						rel="noopener noreferrer"
						title="skype de nicolas halperin"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							version="1.1"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path
								d="M18,6C20.07,8.04 20.85,10.89 20.36,13.55C20.77,14.27 21,15.11 21,16A5,5 0 0,1 16,21C15.11,21 14.27,20.77 13.55,20.36C10.89,20.85 8.04,20.07 6,18C3.93,15.96 3.15,13.11 3.64,10.45C3.23,9.73 3,8.89 3,8A5,5 0 0,1 8,3C8.89,3 9.73,3.23 10.45,3.64C13.11,3.15 15.96,3.93 18,6M12.04,17.16C14.91,17.16 16.34,15.78 16.34,13.92C16.34,12.73 15.78,11.46 13.61,10.97L11.62,10.53C10.86,10.36 10,10.13 10,9.42C10,8.7 10.6,8.2 11.7,8.2C13.93,8.2 13.72,9.73 14.83,9.73C15.41,9.73 15.91,9.39 15.91,8.8C15.91,7.43 13.72,6.4 11.86,6.4C9.85,6.4 7.7,7.26 7.7,9.54C7.7,10.64 8.09,11.81 10.25,12.35L12.94,13.03C13.75,13.23 13.95,13.68 13.95,14.1C13.95,14.78 13.27,15.45 12.04,15.45C9.63,15.45 9.96,13.6 8.67,13.6C8.09,13.6 7.67,14 7.67,14.57C7.67,15.68 9,17.16 12.04,17.16Z"
								fill="inherit"
							/>
						</svg>
						<span aria-label="nico halperin">Nico Halperin</span>
					</a>
				</div>
				<div className={styles["form-submit-wrapper"]} ref={submitMsgRef}>
					<div className={styles["form-submit"]}>Gracias por tu mensaje!</div>
				</div>
			</div>
			<a className="scroll-up r" href="#me" title="volver al principio">
				<svg viewBox="0 0 448 512" aria-label="flecha">
					<path
						fill="currentColor"
						d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z"
					></path>
				</svg>
				<span>back to top</span>
			</a>
			<a className="scroll-up l" href="#me" title="volver al principio">
				<svg viewBox="0 0 448 512" aria-label="flecha">
					<path
						fill="currentColor"
						d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z"
					></path>
				</svg>
				<span>back to top</span>
			</a>
		</section>
	);
}
