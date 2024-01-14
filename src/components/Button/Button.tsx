import React from "react";
import styles from "./Button.module.css";

type Props = {
	link?: boolean;

} & React.HTMLProps<HTMLButtonElement> &
	React.HTMLProps<HTMLAnchorElement>;

export default function Button({ link, children, ...props }: Props) {
	if (link) return <a className={styles.button} {...props}>{children}</a>;
	return <button className={styles.button}>{children}</button>;
}
