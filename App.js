import { View, Text, StyleSheet } from "react-native";
import Welcome from "./app/screens/WelcomeScreen";
import Item from "./app/screens/ItemScreen";
export default function App() {
	return (
		<>
			{/* <Welcome /> */}
			<Item />
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
