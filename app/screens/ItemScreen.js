import { View, StyleSheet, SafeAreaView, Image } from "react-native";

export default function Item() {
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
				<View
					style={{ height: 60, width: 55, backgroundColor: "tomato" }}
				></View>
				<View style={{ height: 60, width: 55, backgroundColor: "cyan" }}></View>
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
