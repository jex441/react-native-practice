import { View, StyleSheet, SafeAreaView, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function Item({ navigation, route }) {
	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					display: "flex",
					height: 70,
					width: "100%",
					paddingHorizontal: 10,
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<View>
					<MaterialCommunityIcons
						name="close"
						color="#fff"
						size={30}
						onPress={() => navigation.navigate("Home")}
					/>
				</View>
				<View>
					<MaterialCommunityIcons
						name="trash-can-outline"
						color="#fff"
						size={35}
					/>
				</View>
			</View>
			<Image
				style={{ marginTop: 60, width: 430, height: 600 }}
				source={require("../assets/chair.jpg")}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		height: "100%",
		backgroundColor: "#000",
		justifyContent: "",
		alignItems: "flex-start",
	},
});
