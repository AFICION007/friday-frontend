import React from "react";
import NumberCard from "../../../global/charts/number-card";
import SharpLine from "../../../global/charts/sharp-line";
import useGetDashcard from "../../hooks/useGetDashcard";

const Dashcard = ({ dashcard }) => {
	const { data, loading, error } = useGetDashcard(dashcard.card_id);

	console.log("dashcard", dashcard);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<>
			{data &&
				(dashcard.card.display === "scalar" ? (
					<NumberCard
						number={data[0].Count}
						title={dashcard.card.name}
					/>
				) : (
					<SharpLine
						title={dashcard.card.name}
						data={data}
						resultMetadata={dashcard.card.result_metadata}
					/>
				))}
		</>
	);
};

export default Dashcard;
