import DataCard from "./data-card";
import UploadButton from "../global/upload-button";
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
			<div className={styles.container}>
				<span className={styles.title}>Upload Files</span>
				<div className={styles.upload_container}>
					<UploadButton
						size="large"
						buttonTitle="Drag & Drop files or Click to Browse Your Files in PC"
						buttonSubtitle="Supported formats: MySQL DB, PDF, Excel, Word, and PNG"
					/>
				</div>
			</div>
		</div>
	);
};

export default DataConnectors;
