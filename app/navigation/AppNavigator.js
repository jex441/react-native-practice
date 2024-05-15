import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Listings from "../screens/Listings";
import AccountNavigator from "./AccountNavigator";
import EditListing from "../screens/EditListing";
import ItemScreen from "../screens/ItemScreen";
import FeedNavigator from "./FeedNavigator";

export default function AppNavigator() {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={FeedNavigator} />
			<Tab.Screen name="Account" component={AccountNavigator} />
			<Tab.Screen name="Add" component={EditListing} />
		</Tab.Navigator>
	);
}
