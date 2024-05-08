import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/styles";

export default function AppInputText({ icon, ...otherProps }) {
	return (
		<View style={styles.container}>
			{icon && (
				<MaterialCommunityIcons name={icon} size={20} color={colors.medium} />
			)}
			<TextInput
				style={{ marginLeft: 10, ...defaultStyles.text }}
				{...otherProps}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 25,
		flexDirection: "row",
		width: "100%",
		padding: 15,
		marginVertical: 10,
	},
});
