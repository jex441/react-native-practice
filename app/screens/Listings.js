import { Text, Button, FlatList } from "react-native";
import React, { useEffect } from "react";

import Screen from "../components/Screen";
import AppCard from "../components/AppCard";
import listingsApi from "../api/listings";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

export default function Listings({ navigation }) {
	const {
		data,
		refreshing,
		loading,
		error,
		request: loadListings,
	} = useApi(listingsApi.getListings);

	useEffect(() => {
		loadListings();
	}, []);

	useEffect(() => {
		if (refreshing) loadListings();
	}, [refreshing]);

	if (loading) {
		return <ActivityIndicator visible={loading} />;
	}

	return (
		<Screen>
			{error && (
				<>
					<Text>Error loading listings</Text>
					<Button title="Retry" onPress={() => loadListings()} />
				</>
			)}
			<FlatList
				data={data}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<AppCard
						title={item.title}
						subtitle={"$" + item.price}
						source={item.images[0].url}
						pressHandler={() =>
							navigation.navigate("ListingDetails", { item: item })
						}
					/>
				)}
				refreshing={refreshing}
				onRefresh={() => {
					loadListings();
				}}
			/>
		</Screen>
	);
}
