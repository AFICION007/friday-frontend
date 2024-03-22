import React from "react";
import { Collapse } from "antd";
import Dashboards from "./dashboards";
import OptionContent from "../../../global/option-content";
import parentStyles from "../styles.module.css";
import useGetFolderStructure from "../../../hooks/useGetFolderStructure";

const DashboardFolders = ({ dashboardIcon, dotIcon }) => {
	const { data: dashboardFolders, loading, error } = useGetFolderStructure();

	return (
		<Collapse
			accordion
			ghost
			expandIconPosition="right"
			className={parentStyles.accordion}
		>
			{!loading &&
				dashboardFolders &&
				dashboardFolders?.map(({ name, id }) => (
					<Collapse.Panel
						header={
							<OptionContent label={name} icon={dashboardIcon} />
						}
						className={parentStyles.accordion}
					>
						<Dashboards folderId={id} dotIcon={dotIcon} />
					</Collapse.Panel>
				))}
		</Collapse>
	);
};

export default DashboardFolders;
