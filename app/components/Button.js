import { View, Text } from "react-native";

import colors from "../config/colors";

export default function Item({ pressHandler, color, title }) {
	return (
		<View
			onPress={() => pressHandler}
			style={{
				backgroundColor: colors[color],
				display: "flex",
				height: 50,
				margin: 5,
				width: "90%",
				paddingHorizontal: 10,
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "center",
				borderRadius: 40,
			}}
		>
			<Text
				style={{
					textTransform: "uppercase",
					fontWeight: "bold",
					color: "#FFF",
				}}
			>
				{title}
			</Text>
		</View>
	);
}
