import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppListItem from "../components/AppListItem";
import Screen from "../components/Screen";
export default function ListingDetails({ route }) {
	const { item } = route.params;
	return (
		<Screen>
			<Image
				style={styles.image}
				source={{
					uri: item.images[0].url,
				}}
			/>
			<Text style={styles.title}>{item.title}</Text>
			<Text style={styles.price}>{item.price}</Text>
			<AppListItem
				title={"Jeffrey Wood"}
				subtitle={"5 items"}
				source={require("../assets/profilephoto.jpg")}
			/>
		</Screen>
	);
}
const styles = StyleSheet.create({
	detailsContainer: {
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 500,
		margin: 10,
	},
	price: {
		color: colors.secondary,
		fontWeight: 500,
		fontSize: 20,
		marginVertical: 10,
		margin: 10,
	},
	image: {
		width: "100%",
		height: 200,
		objectFit: "cover",
	},
});
