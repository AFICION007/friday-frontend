import { useEffect } from "react";
import useAxios from "axios-hooks";

const useGetDashboard = (dashboardId) => {
	const [{ data, loading, error }, refetch] = useAxios(
		{
			baseURL: "http://localhost:8080/",
			method: "GET",
			headers: {
				url: `/api/dashboard/${dashboardId}`,
			},
		},
		{ manual: true }
	);

	useEffect(() => {
		refetch();
	}, [dashboardId, refetch]);

	return { data, loading, error };
};

export default useGetDashboard;
