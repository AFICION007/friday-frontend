import React from "react";
import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";

const Navbar = ({ setMenuOpen }) => {
	return (
		<div className={styles.container}>
			<Button
				icon={<MenuOutlined />}
				onClick={() => setMenuOpen(true)}
				className={styles.icon_button}
			/>
		</div>
	);
};

export default Navbar;
