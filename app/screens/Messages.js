import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppListItem from "../components/AppListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
const messages = [
	{
		id: 2,
		title: "t2",
		description: "d2",
		image: require("../assets/logo-red.png"),
	},
	{
		id: 3,
		title: "t3",
		description: "d3",
		image: require("../assets/logo-red.png"),
	},
	{
		id: 4,
		title: "t4",
		description: "d4",
		image: require("../assets/logo-red.png"),
	},
	{
		id: 5,
		title: "t5",
		description: "d5",
		image: require("../assets/logo-red.png"),
	},
	{
		id: 6,
		title: "t6",
		description: "d6",
		image: require("../assets/logo-red.png"),
	},
];

function Messages(props) {
	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<AppListItem
						title={item.title}
						subtitle={item.description}
						source={item.image}
						pressHandler={() => console.log("message selected", item)}
					/>
				)}
				ItemSeparatorComponent={<ListItemSeparator />}
			/>
		</Screen>
	);
}
const styles = StyleSheet.create({});
export default Messages;
