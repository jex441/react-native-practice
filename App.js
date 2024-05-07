import { View, Text, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Welcome from "./app/screens/WelcomeScreen";
import Item from "./app/screens/ItemScreen";
import AppCard from "./app/components/AppCard";
import ListingDetails from "./app/screens/ListingDetails";
import Messages from "./app/screens/Messages";
export default function App() {
	return (
		<GestureHandlerRootView style={styles.container}>
			{/* <Welcome /> */}
			{/* <AppCard
				title="Chair"
				subtitle="$100"
				source={require("./app/assets/chair.jpg")}
			/> */}
			{/* <Item /> */}
			{/* <ListingDetails /> */}
			<Messages />
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F9F9F9",
	},
});
