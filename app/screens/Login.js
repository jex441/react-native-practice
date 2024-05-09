import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppInputText from "../components/AppInputText";
import AppButton from "../components/AppButton";
import ErrorText from "../components/ErrorText";
import AppFormComponent from "../components/AppFormComponent";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

export default function Login() {
	return (
		<>
			<Screen>
				<Image style={styles.logo} source={require("../assets/logo-red.png")} />
				<Formik
					validationSchema={validationSchema}
					initialValues={{ email: "", password: "" }}
				>
					{({
						handleChange,
						handleSubmit,
						errors,
						setFieldTouched,
						touched,
					}) => (
						<>
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
							<AppButton title="Login" pressHandler={() => handleSubmit()} />
						</>
					)}
				</Formik>
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
