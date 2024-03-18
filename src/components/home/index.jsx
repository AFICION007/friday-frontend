import React from "react";
import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import Dashboard from "./dashboard";
import styles from "./styles.module.css";

function Home({ setMenuOpen }) {
	return (
		<div className={styles.main_container}>
			<Button
				icon={<MenuOutlined />}
				onClick={() => setMenuOpen(true)}
				className={styles.icon_button}
			/>
			<Dashboard />
		</div>
	);
}

export default Home;
