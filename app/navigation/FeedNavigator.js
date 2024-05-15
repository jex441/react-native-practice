import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Listings from "../screens/Listings";
import ListingDetails from "../screens/ListingDetails";

const Stack = createStackNavigator();

export default function FeedNavigator() {
	return (
		<Stack.Navigator mode="modal">
			<Stack.Screen name="Listings" component={Listings} />
			<Stack.Screen
				name="ListingDetails"
				component={ListingDetails}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
