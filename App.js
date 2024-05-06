import { View, Text, StyleSheet } from "react-native";
import Welcome from "./app/screens/WelcomeScreen";
import Item from "./app/screens/ItemScreen";
import AppCard from "./app/components/AppCard";
import ListingDetails from "./app/screens/ListingDetails";
export default function App() {
	return (
		<View style={styles.container}>
			{/* <Welcome /> */}
			{/* <AppCard
				title="Chair"
				subtitle="$100"
				source={require("./app/assets/chair.jpg")}
			/> */}
			<Item />
			{/* <ListingDetails /> */}
		</View>
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
