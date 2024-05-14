import { Text, StyleSheet, SafeAreaView, Image } from "react-native";
import AppButton from "../components/AppButton";

export default function Welcome({ navigation }) {
	console.log(navigation);
	return (
		<>
			<Image
				style={{
					position: "absolute",
					width: "100%",
					height: "100%",
				}}
				source={require("../assets/background.jpg")}
			/>
			<SafeAreaView style={styles.container}>
				<Image
					style={{ position: "absolute", top: 100, width: 100, height: 100 }}
					source={require("../assets/logo-red.png")}
				/>
				<Text
					style={{
						position: "absolute",
						fontSize: 25,
						top: 200,
						marginTop: 10,
					}}
				>
					Sell what you don't need.
				</Text>
				<AppButton
					title="Login"
					pressHandler={() => navigation.navigate("Login")}
				/>
				<AppButton
					title="Sign Up"
					color="secondary"
					pressHandler={() => navigation.navigate("Register")}
				/>
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flex: 1,
		height: "100%",
		flexDirection: "column",
		width: "100%",
		alignItems: "center",
		justifyContent: "flex-end",
	},
});
