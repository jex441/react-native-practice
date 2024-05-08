import { View, StyleSheet, SafeAreaView, Image, FlatList } from "react-native";

import colors from "../config/colors";
import Screen from "../components/Screen";
import AppCard from "../components/AppCard";

const data = [
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
	return (
		<Screen>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<AppCard title={item.name} subtitle={item.price} />
				)}
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
