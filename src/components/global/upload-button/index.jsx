import React from "react";
import { Upload, Button } from "antd";
import styles from "./styles.module.css";
import upload from "../../../assets/upload.svg";

const UploadButton = ({
	size = "regular",
	buttonTitle = "",
	buttonSubtitle = "",
	field,
}) => {
	const buttonContent = (
		<div className={styles[`${size}_container`]}>
			<img src={upload} alt="upload icon" />
			<div className={styles.text}>
				<span className={styles.title}>{buttonTitle}</span>
				<span className={styles.subtitle}>{buttonSubtitle}</span>
			</div>
		</div>
	);

	return size === "large" ? (
		<div className={styles.main_container}>
			<Upload.Dragger className={styles.uploader}>
				{buttonContent}
			</Upload.Dragger>
		</div>
	) : (
		<Upload {...field}>
			<Button className={styles.regular_button}>{buttonContent}</Button>
		</Upload>
	);
};

export default UploadButton;
