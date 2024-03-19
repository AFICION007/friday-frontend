import React, { useState } from "react";
import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import SideMenu from "./side-menu";
import styles from "./styles.module.css";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className={styles.container}>
			<Button
				icon={<MenuOutlined />}
				onClick={() => setMenuOpen(true)}
				className={styles.icon_button}
			/>
			<SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
		</div>
	);
};

export default Navbar;
