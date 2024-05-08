import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/styles";

export default function AppPicker({ icon, placeholder, ...otherProps }) {
	return (
		<View style={styles.container}>
			{icon && (
				<MaterialCommunityIcons name={icon} size={20} color={colors.medium} />
			)}
			<Text
				style={{
					flex: 1,
					marginLeft: 15,
					color: colors.dark,
					...defaultStyles.text,
				}}
			>
				{placeholder}
			</Text>
			<MaterialCommunityIcons
				name="chevron-down"
				size={20}
				color={colors.medium}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 25,
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		padding: 15,
		marginVertical: 10,
	},
});
