import React from "react";
import { Button } from "antd";
import styles from "./styles.module.css";

const IconButton = ({ icon, size, onClick }) => {
	return (
		<Button
			onClick={onClick}
			className={`${styles.button} ${styles[size]}`}
		>
			<img src={icon} alt="icon button" className={styles.icon} />
		</Button>
	);
};

export default IconButton;
