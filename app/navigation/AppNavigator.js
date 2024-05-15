import React from "react";
import { TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Listings from "../screens/Listings";
import AccountNavigator from "./AccountNavigator";
import EditListing from "../screens/EditListing";
import ItemScreen from "../screens/ItemScreen";
import FeedNavigator from "./FeedNavigator";

import colors from "../config/colors";

export default function AppNavigator() {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name={"home"}
							size={30}
							color={colors.primary}
						/>
					),
				}}
				component={FeedNavigator}
			/>
			<Tab.Screen
				name="EditListing"
				component={EditListing}
				options={({ navigation }) => ({
					tabBarButton: () => {
						return (
							<TouchableOpacity
								style={{}}
								onPress={() => navigation.navigate("EditListing")}
							>
								<View
									style={{
										backgroundColor: colors.primary,
										height: 80,
										width: 80,
										borderRadius: 40,
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<MaterialCommunityIcons
										name={"plus-circle"}
										size={40}
										color="white"
									/>
								</View>
							</TouchableOpacity>
						);
					},
				})}
			/>
			<Tab.Screen
				name="Account"
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name={"account"}
							size={30}
							color={colors.primary}
						/>
					),
				}}
				component={AccountNavigator}
			/>
		</Tab.Navigator>
	);
}
