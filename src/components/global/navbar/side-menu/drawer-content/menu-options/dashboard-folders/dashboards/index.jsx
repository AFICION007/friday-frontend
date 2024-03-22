import React from "react";
import { Button } from "antd";
import OptionContent from "../../../../global/option-content";
import grandparentStyles from "../../styles.module.css";
import useGetFolderDashboards from "../../../../hooks/useGetFolderDashboards";

const Dashboards = ({ folderId, dotIcon }) => {
	const { data, loading, error } = useGetFolderDashboards(folderId);
	const { data: children } = data || {};

	return (
		<>
			{!loading &&
				children &&
				children?.map(({ name }) => (
					<Button className={grandparentStyles.menu_button}>
						<OptionContent
							label={name}
							icon={dotIcon}
							dashboard={true}
						/>
					</Button>
				))}
		</>
	);
};

export default Dashboards;
