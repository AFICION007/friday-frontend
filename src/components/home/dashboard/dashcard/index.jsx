import React from "react";
import SharpLine from "../../../global/charts/sharp-line";

const Dashcard = ({ cardId, resultMetadata }) => {
	const [{ data, loading, error }, refetch] = useAxios({
		url: `http://159.65.156.217:3000/api/card/${cardId}/query/json`,
		method: "POST",
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
			<SharpLine data={data} resultMetadata={resultMetadata} />
		</div>
	);
};

export default Dashcard;
