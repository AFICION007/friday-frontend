import React from "react";

import Dashboard from "./dashboard";
import styles from "./styles.module.css";

function Home() {
	return (
		<div className={styles.main_container}>
			<Dashboard />
		</div>
	);
}

export default Home;
