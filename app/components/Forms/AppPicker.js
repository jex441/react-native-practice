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
export default function AppPicker({ icon, data, name, width }) {
	const [visible, setVisible] = useState(false);
	const { setFieldValue, values } = useFormikContext();

	const pressHandler = (val) => {
		setVisible(false);
		setFieldValue(name, val);
	};

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setVisible(!visible)}>
				<View style={{ ...styles.container, width: width || "100%" }}>
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
							...defaultStyles.text,
							color: values.category ? colors.dark : colors.medium,
						}}
					>
						{values.category || "Category"}
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
					<View>
						<FlatList
							numColumns={3}
							data={data}
							keyExtractor={(item) => item.id.toString()}
							renderItem={({ item }) => (
								<PickerItem item={item} pressHandler={pressHandler} />
							)}
						/>
					</View>
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
