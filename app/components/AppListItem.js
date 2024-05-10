import {
	Text,
	Image,
	View,
	TouchableHighlight,
	StyleSheet,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AppListItem({
	title,
	subtitle,
	source = "../assets/chair.jpg",
	pressHandler,
	renderRightActions,
	chevrons = false,
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight onPress={pressHandler} underlayColor={colors.light}>
				<View style={styles.card}>
					<View style={{ flexDirection: "row" }}>
						<Image
							style={{
								width: 70,
								height: 70,
								borderRadius: 35,
							}}
							source={source}
						/>
						<View style={styles.text}>
							<Text style={styles.title}>{title}</Text>
							<Text style={styles.subtitle}>{subtitle}</Text>
						</View>
					</View>
					{chevrons && (
						<View>
							<MaterialCommunityIcons
								name="chevron-right"
								size={20}
								color={colors.medium}
							/>
						</View>
					)}
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	card: {
		flex: 1,
		padding: 10,
		height: 100,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	text: {
		marginHorizontal: 20,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignSelf: "flex-start",
	},
	title: { fontWeight: "500", fontSize: 16, marginBottom: 6, color: "#000" },
	subtitle: {
		fontSize: 14,
		color: colors.medium,
	},
});
