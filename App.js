import { StyleSheet } from "react-native";
import { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Welcome from "./app/screens/WelcomeScreen";
import ItemScreen from "./app/screens/ItemScreen";
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
import ImageInputList from "./app/components/Forms/ImageInputList";
import FormImagePicker from "./app/components/Forms/FormImagePicker";

import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
	const [isNew, setIsNew] = useState(false);
	const Stack = createStackNavigator();
	const isLoggedIn = true;

	const StackNavigator = () => (
		<Stack.Navigator>
			<Stack.Screen name="Welcome" component={Welcome} />
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Register" component={Register} />
		</Stack.Navigator>
	);

	return (
		<NavigationContainer>
			{isLoggedIn ? <AppNavigator /> : <StackNavigator />}
		</NavigationContainer>
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
