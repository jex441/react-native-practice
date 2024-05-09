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
	{ id: 1, label: "Clothing" },
	{ id: 2, label: "Furniture" },
	{ id: 3, label: "Office Supplies" },
	{ id: 4, label: "Automotive" },
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
					/>
					<AppPicker
						placeholder="Category"
						data={categories}
						name={"category"}
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
