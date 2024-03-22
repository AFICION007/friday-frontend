import React from "react";
import Dashcard from "./dashcard";
import useGetDashboard from "../hooks/useGetDashboard";
import styles from "./styles.module.css";

const Dashboard = ({ dashboardId = 1 }) => {
	const { data, loading, error } = useGetDashboard(dashboardId);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div className={styles.main_container}>
			{data &&
				data.dashcards.map((dashcard, index) => {
					if (dashcard.card_id !== null) {
						return <Dashcard key={index} dashcard={dashcard} />;
					}
				})}
		</div>
	);
};

export default Dashboard;
