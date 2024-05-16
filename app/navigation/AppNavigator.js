import React from "react";
import { TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import EditListing from "../screens/EditListing";
import FeedNavigator from "./FeedNavigator";

import colors from "../config/colors";

export default function AppNavigator() {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				options={{
					tabBarLabel: "",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name={"home"}
							size={40}
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
										height: 70,
										width: 70,
										borderRadius: 35,
										justifyContent: "center",
										alignItems: "center",
										position: "absolute",
										bottom: 15,
										left: -28,
									}}
								>
									<MaterialCommunityIcons
										name={"plus-circle"}
										size={50}
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
					tabBarLabel: "",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name={"account"}
							size={40}
							color={colors.primary}
						/>
					),
				}}
				component={AccountNavigator}
			/>
		</Tab.Navigator>
	);
}
