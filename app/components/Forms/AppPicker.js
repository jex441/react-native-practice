import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	Button,
	Modal,
	FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormikContext } from "formik";
import colors from "../../config/colors";
import defaultStyles from "../../config/styles";
import Screen from "../Screen";
import PickerItem from "./PickerItem";
export default function AppPicker({ icon, data, name }) {
	const [visible, setVisible] = useState(false);
	const { setFieldValue, values } = useFormikContext();
	console.log(values);
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
						{values.category}
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
					<FlatList
						data={data}
						keyExtractor={(item) => item.id.toString()}
						renderItem={({ item }) => (
							<PickerItem
								item={item}
								pressHandler={() => setFieldValue(name, item.label)}
							/>
						)}
					/>
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