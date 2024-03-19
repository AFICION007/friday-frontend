import React from "react";

import DataCard from "./data-card";
import styles from "./styles.module.css";
import dataConnectorsObj from "./constants";

const DataConnectors = () => {
	return (
		<div className={styles.main_container}>
			{Object.entries(dataConnectorsObj).map(([key, value]) => (
				<div key={key} className={styles.container}>
					<span className={styles.title}>{value.title}</span>
					<div className={styles.cards}>
						{value.items.map((dataSource, index) => (
							<DataCard
								key={index}
								type={dataSource?.type}
								status={
									dataSource?.status
										? dataSource.status
										: "disconnected"
								}
								cardInfo={dataSource}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default DataConnectors;
