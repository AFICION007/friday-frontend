import React from "react";
import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import ChatBot from "./ChatBot";
import styles from "./styles.module.css";

function HomePage({ setMenuOpen }) {
	return (
		<div className={styles.main_container}>
			<Button
				icon={<MenuOutlined />}
				onClick={() => setMenuOpen(true)}
				className={styles.icon_button}
			/>
			<ChatBot />
		</div>
	);
}

export default HomePage;
