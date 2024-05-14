import React from "react";
import { useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
	AppFormComponent,
	AppForm,
	AppPicker,
	FormImagePicker,
} from "../components/Forms";

const validationSchema = Yup.object().shape({
	title: Yup.string().required().label("Name"),
	price: Yup.string().required().label("Price"),
	category: Yup.string().required().min(1).label("Category"),
	description: Yup.string().required().min(1).label("Description"),
});

const categories = [
	{ id: 1, label: "Furniture", color: "#fc5c65", name: "floor-lamp" },
	{ id: 2, label: "Cars", color: "#fd9644", name: "car" },
	{ id: 3, label: "Cameras", color: "#fed330", name: "camera" },
	{ id: 4, label: "Games", color: "#26de81", name: "cards" },
	{ id: 5, label: "Clothing", color: "#2bcbba", name: "shoe-heel" },
	{ id: 6, label: "Sports", color: "#45aaf2", name: "basketball" },
	{ id: 7, label: "Movies and Music", color: "#4b7bec", name: "headphones" },
];

export default function EditListing() {
	const [permissions, setPermissions] = useState(false);
	const [imageUris, setImageUris] = useState([]);

	const addImage = (newUri) => {
		setImageUris([...imageUris, newUri]);
	};

	const removeImage = (uri) => {
		setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
	};
	return (
		<>
			<Screen>
				<AppForm
					title="Post"
					initialValues={{
						images: [],
						title: "",
						price: "",
						category: "",
						description: "",
					}}
					onSubmit={(values) => console.log("submit:", values)}
					validationSchema={validationSchema}
				>
					<FormImagePicker
						name="images"
						imageUris={imageUris}
						onAddImage={addImage}
						onRemoveImage={removeImage}
						permissions={permissions}
						setPermissions={setPermissions}
					/>
					<AppFormComponent name="title" autoCapitalize="none" />
					<AppFormComponent name="price" autoCorrect={false} width="40%" />
					<AppPicker
						placeholder="Category"
						data={categories}
						name={"category"}
						width="60%"
					/>
					<AppFormComponent name="description" autoCorrect={false} />
				</AppForm>
			</Screen>
		</>
	);
}
const styles = StyleSheet.create({
	logo: {
		alignSelf: "center",
		height: 80,
		width: 80,
		marginTop: 50,
		marginBottom: 20,
	},
});
