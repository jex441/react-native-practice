import { View, StyleSheet, SafeAreaView, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

import colors from "../config/colors";
import Screen from "../components/Screen";
import AppCard from "../components/AppCard";

const initialData = [
	{
		id: 1,
		name: "Red Jacket for sale",
		price: "$100",
		source: "../assets/chair.jpg",
	},
	{
		id: 2,
		name: "Red Jacket for sale",
		price: "$100",
		source: "../assets/chair.jpg",
	},
];
export default function Listings() {
	const [refreshing, setRefreshing] = useState(false);
	const [data, setData] = useState(initialData);
	useEffect(() => {
		if (refreshing) {
			setData([
				{
					id: 2,
					name: "Red Jacket for sale",
					price: "$100",
					source: "../assets/chair.jpg",
				},
			]);
		}
		setRefreshing(false);
	}, [refreshing]);

	return (
		<Screen>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<AppCard title={item.name} subtitle={item.price} />
				)}
				refreshing={refreshing}
				onRefresh={() => {
					setRefreshing(true);
				}}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		height: "100%",
		backgroundColor: "#f9f9f9",
		justifyContent: "",
		alignItems: "flex-start",
		width: "100%",
	},
});
