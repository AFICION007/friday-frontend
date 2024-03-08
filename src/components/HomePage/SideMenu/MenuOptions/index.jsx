import React from "react";
import styles from "./styles.module.css";
import sideMenuObj from "../constants";

const MenuOptions = () => {
	return (
		<div className={styles.menu_options}>
			<h3 className={styles.menu_title}>
				{sideMenuObj.menuOptions.title}
			</h3>
			{sideMenuObj.menuOptions.items.map(({ icon, label }) => (
				<div key={label} className={styles.menu_option}>
					<img src={icon} alt="option icon" className={styles.icon} />
					<span className={styles.label}>{label}</span>
				</div>
			))}
		</div>
	);
};

export default MenuOptions;
