import { StyleSheet } from "react-native";
import { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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

export default function App() {
	const [isNew, setIsNew] = useState(false);
	const Stack = createStackNavigator();
	const isLoggedIn = true;

	const Tab = createBottomTabNavigator();
	const TabNavigator = () => {
		return (
			<Tab.Navigator>
				<Tab.Screen name="Home" component={Listings} />
				<Tab.Screen name="Account" component={Account} />
				<Tab.Screen name="Add" component={EditListing} />
			</Tab.Navigator>
		);
	};

	const StackNavigator = () => (
		<Stack.Navigator>
			{isLoggedIn ? (
				<>
					<Stack.Screen name="Home" component={Listings} />
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen name="Register" component={Register} />
				</>
			) : (
				<>
					<Stack.Screen name="Welcome" component={Welcome} />
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen name="Register" component={Register} />
				</>
			)}
		</Stack.Navigator>
	);

	return (
		<NavigationContainer>
			{/* <StackNavigator /> */}
			<TabNavigator />
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
