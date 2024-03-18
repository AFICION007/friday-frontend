import React from "react";
import DataCard from "./data-card";
import Chatbot from "../chatbot";

import styles from "./styles.module.css";
import dataConnectorsObj from "./constants";
import Navbar from "../global/navbar";

const DataConnectors = ({ setMenuOpen }) => {
	return (
		<div className={styles.data_connectors}>
			<div className="connectors">
				<Navbar setMenuOpen={setMenuOpen} />
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
			</div>
			<Chatbot />
		</div>
	);
};

export default DataConnectors;
