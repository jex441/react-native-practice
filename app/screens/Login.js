import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppFormComponent, AppForm } from "../components/Forms";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

export default function Login() {
	return (
		<>
			<Screen>
				<Image style={styles.logo} source={require("../assets/logo-red.png")} />
				<AppForm
					initialValues={{ email: "", password: "" }}
					onSubmit={(values) => console.log(values)}
					validationSchema={validationSchema}
				>
					<AppFormComponent
						name="email"
						icon="email"
						autoCapitalize="none"
						autoCorrect={false}
						keyboardType="email-address"
						textContentType="emailAddress"
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
