import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);
const postListing = async (vals) => {
	const formData = new FormData();

	formData.append("title", vals.title);
	formData.append("description", vals.description);
	formData.append("categoryId", 1);
	formData.append("price", vals.price);

	vals.images.forEach((img, index) =>
		formData.append("images", {
			name: "image" + index,
			type: "image/jpeg",
			uri: img,
		})
	);
	const res = await client.post(endpoint, formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
	console.log(res);
	return res;
};

export default {
	getListings,
	postListing,
};
