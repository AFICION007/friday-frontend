import { useEffect } from "react";
import useAxios from "axios-hooks";

const useGetDashcard = (cardId) => {
	const [{ data, loading, error }, refetch] = useAxios(
		{
			baseURL: "http://localhost:8080/",
			method: "POST",
			headers: {
				url: `/api/card/${cardId}/query/json`,
			},
		},
		{ manual: true }
	);

	useEffect(() => {
		refetch();
	}, [cardId, refetch]);

	return { data, loading, error };
};

export default useGetDashcard;
