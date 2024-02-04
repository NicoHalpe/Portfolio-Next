import Image from "next/image";
import React from "react";
import styles from "./Project.module.css";

type Props = {
	title: string;
	description: string;
	stacks: string[];
	image: string;
	link: string;
	download?: boolean;
	selected?: boolean;
	onClick?: () => void;
};
export default function Project({
	title,
	description,
	stacks,
	image,
	link,
	download,
	selected,
	onClick,
}: Props) {
	return (
		<div className={styles.card + (selected ? ` ${styles.visible}` : "")} onClick={onClick}>
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
