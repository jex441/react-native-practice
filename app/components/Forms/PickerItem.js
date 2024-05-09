import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function PickerItem({ item, pressHandler }) {
	return (
		<TouchableOpacity onPress={pressHandler}>
			<Text style={styles.text}>{item.label}</Text>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	text: {
		padding: 20,
	},
});
