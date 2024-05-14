import React from "react";
import { useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useFormikContext } from "formik";

import ImageInputList from "./ImageInputList";
import ErrorText from "./ErrorText";

function FormImagePicker({
	name,
	imageUris,
	onAddImage,
	onRemoveImage,
	setPermissions,
	permissions,
}) {
	const { setFieldValue, touched, errors } = useFormikContext();
	console.log(errors);
	useEffect(() => {
		setFieldValue(name, imageUris);
	}, [imageUris]);

	return (
		<>
			<ImageInputList
				onBlur={() => setFieldTouched(name)}
				onAddImage={onAddImage}
				onRemoveImage={onRemoveImage}
				setPermissions={setPermissions}
				permissions={permissions}
				imageUris={imageUris}
			/>
			<ErrorText text={errors[name]} visible={touched[name]} />
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
});

export default FormImagePicker;
