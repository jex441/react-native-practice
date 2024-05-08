import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	Button,
	Modal,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import Screen from "./Screen";

export default function AppPicker({ icon, placeholder, ...otherProps }) {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setVisible(!visible)}>
				<View style={styles.container}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={colors.medium}
						/>
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
			</TouchableWithoutFeedback>
			<Modal visible={visible} animationType="slide">
				<Screen>
					<Button title="Close" onPress={() => setVisible(!visible)} />
				</Screen>
			</Modal>
		</>
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
