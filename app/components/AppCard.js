import { Text, Image, View, TouchableOpacity, StyleSheet } from "react-native";

import colors from "../config/colors";

export default function AppCard({ title, subtitle, pressHandler, source }) {
	return (
		<TouchableOpacity onPress={pressHandler} style={styles.card}>
			<Image
				style={{
					width: 450,
					height: 200,
				}}
				source={{ uri: source }}
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
		backgroundColor: "#fff",
		height: 300,
		marginVertical: 10,
		width: "100%",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
});
