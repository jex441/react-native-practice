import React from "react";
import {
	TouchableWithoutFeedback,
	View,
	StyleSheet,
	Text,
	Image,
	Button,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormikContext } from "formik";

import colors from "../../config/colors";

export default function ImageInput({
	uri,
	onAddImage,
	onRemoveImage,
	permissions,
	setPermissions,
}) {
	const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

	const selectImage = async () => {
		if (!permissions) {
			const { granted } = await ImagePicker.requestCameraPermissionsAsync();
			if (granted) setPermissions(true);
		}

		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			quality: 0.5,
		});
		if (!result.assets[0].uri) return;
		onAddImage(result.assets[0].uri);
	};

	return (
		<>
			{uri ? (
				<TouchableWithoutFeedback onPress={() => onRemoveImage(uri)}>
					<Image style={styles.image} source={{ uri: uri }} />
				</TouchableWithoutFeedback>
			) : (
				<TouchableWithoutFeedback onPress={() => selectImage()}>
					<View style={styles.container}>
						<MaterialCommunityIcons
							name="camera"
							color={colors.medium}
							size={40}
						/>
					</View>
				</TouchableWithoutFeedback>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 5,
		height: 80,
		width: 80,
		borderRadius: 10,
		backgroundColor: colors.light,
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		margin: 5,
		height: 80,
		width: 80,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
});
