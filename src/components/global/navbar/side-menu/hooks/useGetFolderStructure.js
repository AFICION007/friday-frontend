import useAxios from "axios-hooks";

const useGetFolderStructure = () => {
	const [{ data, loading, error }] = useAxios(
		{
			baseURL: "http://localhost:8080/",
			method: "GET",
			headers: {
				url: `/api/collection/tree`,
			},
		},
		{ manual: false }
	);

	return { data, loading, error };
};

export default useGetFolderStructure;
