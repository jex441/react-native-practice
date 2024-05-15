import { useState } from "react";

export default useApi = (apiFunc) => {
	const [refreshing, setRefreshing] = useState(false);
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const request = async (...args) => {
		setLoading(true);
		const res = await apiFunc(...args);
		setLoading(false);
		if (!res.ok) return setError(true);

		setError(false);
		setRefreshing(false);
		setData(res.data);
	};

	return { request, refreshing, error, loading, data };
};
