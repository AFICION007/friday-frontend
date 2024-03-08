import React from "react";

import SideMenu from "./SideMenu";
import ChatBot from "./ChatBot";
import styles from "./styles.module.css";

function HomePage() {
	return (
		<div className={styles.main_container}>
			<SideMenu />
			<ChatBot />
		</div>
	);
}

export default HomePage;
