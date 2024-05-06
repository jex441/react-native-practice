import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Image,
	ImageBackground,
} from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

export default function Welcome() {
	return (
		<>
			<Image
				style={{
					position: "absolute",
					zIndex: "-1",
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
				<AppButton title="Login" />
				<AppButton title="Sign Up" color="secondary" />
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
