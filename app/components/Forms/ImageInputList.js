import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { useFormikContext } from "formik";

import ImageInput from "./ImageInput";

function ImageInputList({
	imageUris,
	onAddImage,
	onRemoveImage,
	permissions,
	setPermissions,
}) {
	const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

	return (
		<View style={styles.container}>
			<FlatList
				data={imageUris}
				keyExtractor={(uri) => uri}
				numColumns={4}
				renderItem={({ item }) => {
					return (
						<ImageInput
							uri={item}
							onAddImage={onAddImage}
							onRemoveImage={onRemoveImage}
							permissions={permissions}
							setPermissions={setPermissions}
						/>
					);
				}}
			/>
			<ImageInput
				uri={""}
				onAddImage={onAddImage}
				onRemoveImage={onRemoveImage}
				permissions={permissions}
				setPermissions={setPermissions}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		gap: 10,
		justifyContent: "flex-start",
		width: "100%",
	},
});

export default ImageInputList;
