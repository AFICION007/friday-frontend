import React from "react";

import Dashboard from "./dashboard";
import styles from "./styles.module.css";

function Home({ setMenuOpen }) {
	return (
		<div className={styles.main_container}>
			<Dashboard />
		</div>
	);
}

export default Home;
