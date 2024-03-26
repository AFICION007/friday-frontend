import { useNavigate } from "react-router-dom";
import CustomButton from "../../global/custom-button";
import styles from "./styles.module.css";

const DataCard = ({ status, type, cardInfo }) => {
	const navigate = useNavigate();

	const cardsMapping = {
		connected_database: (
			<>
				<span className={styles.dbname}>{cardInfo.name}</span>
				<div className={styles.view_edit}>
					<CustomButton buttonText="View Schema" />
					<CustomButton buttonText="Edit Connection" />
				</div>
				<CustomButton
					buttonText="Delete Connection"
					type="default"
					subtype="error"
				/>
			</>
		),
		connected_file: (
			<>
				<span className={styles.dbname}>{cardInfo.name}</span>
				<CustomButton buttonText="Download File" />
				<CustomButton
					buttonText="Delete File"
					type="default"
					subtype="error"
				/>
			</>
		),
		disconnected: (
			<CustomButton
				buttonText="Connect"
				onClick={() =>
					navigate(`connect-new-data-source/${cardInfo.value}`)
				}
			/>
		),
	};

	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<img
					src={cardInfo.image}
					alt="data source image"
					className={`${styles.source_image} ${
						styles[cardInfo.value]
					}`}
				/>
			</div>
			<div className={styles.bottom}>
				{console.log(
					status === "connected" ? `${status}_${type}` : status
				)}
				{
					cardsMapping[
						status === "connected" ? `${status}_${type}` : status
					]
				}
			</div>
		</div>
	);
};

export default DataCard;
