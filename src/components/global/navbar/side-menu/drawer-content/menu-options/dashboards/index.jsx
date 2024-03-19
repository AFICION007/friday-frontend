import React from "react";
import { Collapse, Button } from "antd";

import OptionContent from "../../../global/option-content";
import parentStyles from "../styles.module.css";

const Dashboards = ({ dashboards, dashboardIcon, dotIcon }) => {
	return (
		<Collapse accordion ghost className={parentStyles.accordion}>
			{dashboards?.map(({ label, children }) => (
				<Collapse.Panel
					header={
						<OptionContent label={label} icon={dashboardIcon} />
					}
					className={parentStyles.accordion}
				>
					{children?.map((option) => (
						<Button className={parentStyles.menu_button}>
							<OptionContent label={option} icon={dotIcon} />
						</Button>
					))}
				</Collapse.Panel>
			))}
		</Collapse>
	);
};

export default Dashboards;
