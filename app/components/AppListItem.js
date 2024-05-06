import { Text, Image, View, TouchableOpacity, StyleSheet } from "react-native";

import colors from "../config/colors";

export default function AppListItem({
	title,
	subtitle,
	source = "../assets/chair.jpg",
	pressHandler,
}) {
	return (
		<TouchableOpacity onPress={pressHandler} style={styles.card}>
			<Image
				style={{
					width: 70,
					height: 70,
					borderRadius: 35,
				}}
				source={source}
			/>
			<View style={styles.text}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subtitle}>{subtitle}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	card: {
		padding: 5,
		height: 100,
		margin: 10,
		width: "90%",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	text: {
		marginHorizontal: 10,
		flexDirection: "column",
		justifyContent: "flex-start",
	},
	title: { fontWeight: "500", fontSize: 16, marginBottom: 6, color: "#000" },
	subtitle: {
		fontSize: 14,
		color: colors.medium,
	},
});
