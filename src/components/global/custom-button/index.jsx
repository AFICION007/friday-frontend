import { Button } from "antd";
import styles from "./styles.module.css";

const CustomButton = ({
	type = "default",
	subtype = "main",
	size = "regular",
	buttonText = "",
	onClick = () => {},
	htmlType = "submit",
}) => {
	return (
		<Button
			type={type}
			htmlType={htmlType}
			onClick={onClick}
			className={`${styles.button} ${styles[`${type}_${subtype}`]} ${
				styles[size]
			}`}
		>
			{buttonText}
		</Button>
	);
};

export default CustomButton;
