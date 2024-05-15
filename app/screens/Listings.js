import { View, StyleSheet, SafeAreaView, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

import colors from "../config/colors";
import Screen from "../components/Screen";
import AppCard from "../components/AppCard";
import listings from "../api/listings";

export default function Listings({ navigation }) {
	const [refreshing, setRefreshing] = useState(false);
	const [data, setData] = useState([]);

	const loadListings = async () => {
		const res = await listings.getListings();
		setData(res.data);
	};

	useEffect(() => {
		loadListings();
	}, []);

	useEffect(() => {}, [refreshing]);

	return (
		<Screen>
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
					setRefreshing(true);
				}}
			/>
		</Screen>
	);
}
