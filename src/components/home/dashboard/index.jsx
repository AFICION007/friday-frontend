import React, { useEffect } from "react";
import useAxios from "axios-hooks";
import Dashcard from "./dashcard";

const Dashboard = ({ id = 1 }) => {
	const [{ data, loading, error }, refetch] = useAxios({
		url: `http://159.65.156.217:3000/api/dashboard/${id}`,
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"X-Metabase-Session": "e7b2c641-a8ec-45c9-b0e1-4d79333eda1d",
		},
	});

	useEffect(() => {
		refetch();
	}, [id]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div>
			{data.dashcards.map((card, index) => {
				if (card.card_id) {
					return (
						<Dashcard
							cardId={card.card_id}
							resultMetadata={data.card.result_metadata}
							key={index}
						/>
					);
				}
			})}
		</div>
	);
};

export default Dashboard;
