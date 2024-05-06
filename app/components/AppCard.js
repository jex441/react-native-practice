import { Text, Image, View, TouchableOpacity, StyleSheet } from "react-native";

import colors from "../config/colors";

export default function AppCard({
	pressHandler,
	source = "../assets/chair.jpg",
	title,
	subtitle,
}) {
	return (
		<TouchableOpacity onPress={pressHandler} style={styles.card}>
			<Image
				style={{
					width: "100%",
					height: 200,
				}}
				source={source}
			/>
			<View style={{ padding: 20 }}>
				<Text
					style={{
						fontWeight: "bold",
						marginBottom: 8,
						color: "#000",
					}}
				>
					{title}
				</Text>
				<Text
					style={{
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
