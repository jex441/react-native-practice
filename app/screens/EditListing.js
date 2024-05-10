import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppFormComponent, AppForm, AppPicker } from "../components/Forms";

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label("Name"),
	price: Yup.string().required().label("Email"),
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
	return (
		<>
			<Screen>
				<AppForm
					title="Post"
					initialValues={{
						title: "",
						price: "",
						category: "",
						description: "",
					}}
					onSubmit={(values) => console.log(values)}
					validationSchema={validationSchema}
				>
					<AppFormComponent
						name="name"
						icon="account"
						autoCapitalize="none"
						autoCorrect={false}
						textContentType="name"
					/>
					<AppFormComponent
						name="price"
						icon="currency-usd"
						autoCapitalize="none"
						autoCorrect={false}
						textContentType="name"
						width="40%"
					/>
					<AppPicker
						placeholder="Category"
						data={categories}
						name={"category"}
						width="60%"
					/>
					<AppFormComponent
						name="password"
						icon="lock"
						autoCapitalize="none"
						autoCorrect={false}
						textContentType="password"
						secureTextEntry
					/>
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
