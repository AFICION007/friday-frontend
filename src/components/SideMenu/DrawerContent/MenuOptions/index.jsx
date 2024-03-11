import React from "react";
import { Collapse, Button } from "antd";

import Dashboards from "./Dashboards";
import OptionContent from "../../Global/OptionContent";
import styles from "./styles.module.css";
import sideMenuObj from "../../constants";

import maincarat from "../../assets/menuoptions/maincarat.svg";

const getOption = (option) => {
	const optionsMapping = {
		button: (
			<Button className={styles.menu_button}>
				<OptionContent {...option} />
			</Button>
		),
		accordion: (
			<Collapse
				expandIcon={({ isActive }) => (
					<span>{isActive ? <img src={maincarat} /> : null}</span>
				)}
			>
				<Collapse.Panel
					header={<OptionContent {...option} />}
					className={styles.main_accordion}
				>
					<Dashboards {...option} />
				</Collapse.Panel>
			</Collapse>
		),
	};

	return optionsMapping[option.type];
};

const MenuOptions = () => {
	return (
		<div>
			<h3 className={styles.menu_title}>
				{sideMenuObj.menuOptions.title}
			</h3>
			{sideMenuObj.menuOptions.items.map((option) => (
				<div key={option.label} className={styles.option_wrapper}>
					{getOption(option)}
				</div>
			))}
		</div>
	);
};

export default MenuOptions;
