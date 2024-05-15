import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Messages from "../screens/Messages";
import Account from "../screens/Account";

const Stack = createStackNavigator();

export default function AccountNavigator() {
	return (
		<Stack.Navigator mode="modal">
			<Stack.Screen name="Account" component={Account} />
			<Stack.Screen name="Messages" component={Messages} />
		</Stack.Navigator>
	);
}
