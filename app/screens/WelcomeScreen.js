import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Image,
	ImageBackground,
} from "react-native";

import colors from "../config/colors";

export default function Welcome() {
	return (
		<View style={styles.container}>
			<ImageBackground
				style={{ width: "100%", height: "100%" }}
				source={require("../assets/background.jpg")}
			>
				<SafeAreaView
					style={{
						width: "100%",
						flex: 1,
						padding: 400,
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					<Image
						style={{ marginTop: 40, width: 100, height: 100 }}
						source={require("../assets/logo-red.png")}
					/>
					<Text style={{ marginTop: 10 }}>Sell what you don't need.</Text>
				</SafeAreaView>
				<View
					style={{ height: 70, width: "100%", backgroundColor: colors.primary }}
				></View>
				<View
					style={{
						height: 70,
						width: "100%",
						backgroundColor: colors.secondary,
					}}
				></View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		justifyContent: "start",
	},
});
