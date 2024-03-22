import React from "react";
import styles from "./styles.module.css";

const OptionContent = ({ icon, label, dashboard = false }) => {
	return (
		<div className={styles.menu_option}>
			<img src={icon} alt="option icon" className={styles.icon} />
			<span
				className={`${styles.label} ${
					dashboard && styles.dashboard_label
				}`}
			>
				{label}
			</span>
		</div>
	);
};

export default OptionContent;
