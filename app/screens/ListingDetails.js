import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppListItem from "../components/AppListItem";

export default function ListingDetails({ title, price, source }) {
	return (
		<View>
			<Image style={styles.image} source={source} />
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.price}>{price}</Text>
			<AppListItem
				title={"Jeffrey Wood"}
				subtitle={"5 items"}
				source={require("../assets/logo-red.png")}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	detailsContainer: {
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 500,
	},
	price: {
		color: colors.secondary,
		fontWeight: 500,
		fontSize: 20,
		marginVertical: 10,
	},
	image: {
		width: "100%",
	},
});
