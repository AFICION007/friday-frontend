import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../global/navbar";
import Chatbot from "./chatbot";
import styles from "./styles.module.css";

const Layout = ({ setMenuOpen }) => {
	return (
		<div className={styles.main_container}>
			<div className={styles.left_container}>
				<Navbar setMenuOpen={setMenuOpen} />
				<Outlet />
			</div>
			<Chatbot />
		</div>
	);
};

export default Layout;
