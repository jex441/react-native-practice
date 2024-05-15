import React from "react";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible }) {
	return (
		<LottieView
			autoPlay
			loop
			source={require("../animations/loader.json")}
		></LottieView>
	);
}

export default ActivityIndicator;
