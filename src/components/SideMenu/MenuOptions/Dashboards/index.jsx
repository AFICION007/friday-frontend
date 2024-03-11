import React from "react";
import { Collapse } from "antd";

import OptionContent from "../../Global/OptionContent";
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
						<OptionContent label={option} icon={dotIcon} />
					))}
				</Collapse.Panel>
			))}
		</Collapse>
	);
};

export default Dashboards;
