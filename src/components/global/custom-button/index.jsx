import React from "react";
import { Button } from "antd";
import styles from "./styles.module.css";

const CustomButton = ({
	type = "default",
	subtype = "main",
	buttonText = "",
	onClick = () => {},
}) => {
	return (
		<Button
			type={type}
			onClick={onClick}
			className={`${styles.button} ${styles[`${type}_${subtype}`]}`}
		>
			{buttonText}
		</Button>
	);
};

export default CustomButton;
