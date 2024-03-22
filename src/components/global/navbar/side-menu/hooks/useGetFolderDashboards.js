import { useEffect } from "react";
import useAxios from "axios-hooks";

const useGetFolderDashboards = (folderId) => {
	const [{ data, loading, error }, refetch] = useAxios(
		{
			baseURL: "http://localhost:8080/",
			method: "GET",
			headers: {
				url: `/api/collection/${folderId}/items?models=dashboard`,
			},
		},
		{ manual: true }
	);

	useEffect(() => {
		refetch();
	}, [folderId, refetch]);

	return { data, loading, error };
};

export default useGetFolderDashboards;
