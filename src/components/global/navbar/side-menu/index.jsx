import { Drawer } from "antd";

import DrawerContent from "./drawer-content";
import styles from "./styles.module.css";

const SideMenu = ({ menuOpen, setMenuOpen }) => {
	return (
		<Drawer
			placement="left"
			open={menuOpen}
			headerStyle={{ display: "none" }}
			onClose={() => setMenuOpen(false)}
			width={"auto"}
			classNames={{
				body: styles.body,
			}}
			className={styles.menu}
		>
			<DrawerContent />
		</Drawer>
	);
};

export default SideMenu;
