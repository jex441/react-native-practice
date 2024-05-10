import { Text, Image, View, TouchableOpacity, StyleSheet } from "react-native";

import colors from "../config/colors";

export default function AppCard({
	title,
	subtitle,
	pressHandler,
	source = "../assets/chair.jpg",
}) {
	return (
		<TouchableOpacity onPress={pressHandler} style={styles.card}>
			<Image
				style={{
					width: "100%",
					height: 200,
				}}
				source={require("../assets/chair.jpg")}
			/>
			<View style={{ padding: 20 }}>
				<Text
					numberOfLines={1}
					style={{
						overflow: "hidden",
						fontWeight: "bold",
						marginBottom: 8,
						color: "#000",
					}}
				>
					{title}
				</Text>
				<Text
					numberOfLines={1}
					style={{
						overflow: "hidden",
						fontWeight: "bold",
						color: colors.secondary,
					}}
				>
					{subtitle}
				</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	card: {
		overflow: "hidden",
		borderRadius: 15,
		backgroundColor: "#FFF",
		height: 300,
		margin: 10,
		width: "90%",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
});
