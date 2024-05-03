import { View, Text, StyleSheet } from "react-native";
import Welcome from "./app/screens/WelcomeScreen";
import Item from "./app/screens/ItemScreen";
import Button from "./app/components/Button";
export default function App() {
	return (
		<View style={styles.container}>
			<Button title="Hello" color="primary" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#FFF",
	},
});
