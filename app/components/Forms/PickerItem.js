import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

export default function PickerItem({ item, pressHandler }) {
	return (
		<TouchableOpacity style={styles.container} onPress={pressHandler}>
			<View style={{ ...styles.badge, backgroundColor: item.color }}>
				<MaterialCommunityIcons name={item.name} color="white" size={40} />
			</View>
			<View>
				<Text style={styles.text}>{item.label}</Text>
			</View>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		margin: 20,
	},
	badge: {
		justifyContent: "center",
		alignItems: "center",
		height: 80,
		width: 80,
		borderRadius: 40,
		marginBottom: 15,
	},
	text: {
		fontSize: 20,
		color: colors.dark,
		textAlign: "center",
	},
});
