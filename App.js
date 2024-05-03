import { View, Text, StyleSheet } from "react-native";
import Welcome from "./app/screens/WelcomeScreen";
import Item from "./app/screens/ItemScreen";
export default function App() {
	return (
		<View style={styles.container}>
			<Welcome />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#FFF",
	},
});
