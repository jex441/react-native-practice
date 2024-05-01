import { View, Text, StyleSheet } from "react-native";
import Welcome from "./components/Welcome";

export default function App() {
	return (
		<>
			<Welcome />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "dodgerblue",
		justifyContent: "center",
		alignItems: "center",
		height: "20%",
		justifyContent: "start",
	},
});
