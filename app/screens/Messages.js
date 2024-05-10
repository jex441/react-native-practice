import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppListItem from "../components/AppListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
const initialMessages = [
	{
		id: 2,
		title: "t2",
		description: "d2",
		image: require("../assets/profilephoto.jpg"),
	},
	{
		id: 3,
		title: "t3",
		description: "d3",
		image: require("../assets/profilephoto.jpg"),
	},
	{
		id: 4,
		title: "t4",
		description: "d4",
		image: require("../assets/profilephoto.jpg"),
	},
	{
		id: 5,
		title: "t5",
		description: "d5",
		image: require("../assets/profilephoto.jpg"),
	},
	{
		id: 6,
		title: "t6",
		description: "d6",
		image: require("../assets/profilephoto.jpg"),
	},
];

function Messages(props) {
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = (message) => {
		const newMessages = messages.filter((msg) => msg.title !== message.title);
		console.log("=>", message);
		setMessages(newMessages);
	};

	useEffect(() => {
		if (refreshing) {
			setMessages([
				{
					id: 6,
					title: "t6",
					description: "d6",
					image: require("../assets/profilephoto.jpg"),
				},
			]);
		}
		setRefreshing(false);
	}, [refreshing]);
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
						renderRightActions={() => (
							<ListItemDeleteAction pressHandler={() => handleDelete(item)} />
						)}
						pressHandler={() => console.log("message selected", item)}
						chevrons={true}
					/>
				)}
				ItemSeparatorComponent={<ListItemSeparator />}
				refreshing={refreshing}
				onRefresh={() => {
					setRefreshing(true);
				}}
			/>
		</Screen>
	);
}
const styles = StyleSheet.create({});
export default Messages;
