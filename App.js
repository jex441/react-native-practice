import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState } from "react";

import Welcome from "./app/screens/WelcomeScreen";
import Item from "./app/screens/ItemScreen";
import AppCard from "./app/components/AppCard";
import ListingDetails from "./app/screens/ListingDetails";
import Messages from "./app/screens/Messages";
import Account from "./app/screens/Account";
import Listings from "./app/screens/Listings";
import AppInputText from "./app/components/Forms/AppInputText";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/Forms/AppPicker";
import Login from "./app/screens/Login";
import Register from "./app/screens/Register";
import EditListing from "./app/screens/EditListing";

export default function App() {
	const [isNew, setIsNew] = useState(false);
	return (
		<GestureHandlerRootView style={styles.container}>
			<Welcome />
			{/* <AppCard
				title="Chair"
				subtitle="$100"
				source={require("./app/assets/chair.jpg")}
			/> */}
			{/* <Item /> */}
			{/* <ListingDetails /> */}
			{/* <Messages /> */}
			{/* <Account /> */}
			{/* <Listings /> */}
			{/* <AppInputText icon="email" placeholder="Email" /> */}
			{/* <Screen>
				<Switch
					value={isNew}
					onValueChange={(newValue) => {
						setIsNew(newValue);
					}}
				/>
			</Screen> */}
			{/* <AppPicker icon="email" placeholder="Email" /> */}
			{/* <Login /> */}
			{/* <Register /> */}
			{/* <EditListing /> */}
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
