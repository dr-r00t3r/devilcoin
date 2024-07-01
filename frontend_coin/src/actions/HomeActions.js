// import axios from 'axios';
// import {
// 	InputCheckModule as InputCheck
// } from '../modules';
// import {
// 	HOME_WEB_POSTS,
// 	HOME_PRODUCTS,
// 	HOME_INSTAGRAM_POSTS,
// 	// HOME_CONTACT_STATUS
// } from '../types';
// import {
// 	BASE_URL,
// 	INSTAGRAM_ACCESS_TOKEN
// } from '../Environments';

// export const homeInitial = () => {
// 	return dispatch => {
// 		axios.post(BASE_URL + '/api/blog/last/' + 2 + '/', {
// 		params: {},
// 		headers: {
// 			'Accept' : 'application/json',
// 			'Content-Type' : 'application/json'
// 		}
// 		})
// 		.then(response => {
// 				const information = response.data.information;
// 				let posts = [];
// 		for (let i = 0; i < information.length; i++) {
// 			const content_split = information[i].post_content.split(" ");
// 			let content_index = 0;
// 			let content = content_split[content_index];
// 			while(content.length < 100) {
// 			if (content_split[content_index] === undefined) {
// 				content = content + ". ";
// 			} else {
// 				content = content + " " + content_split[content_index];
// 			}
// 			content_index++;
// 			}
// 			content = content + "...";
// 			posts.push({
// 			post_id: information[i].post_id,
// 			post_title: information[i].post_title,
// 			post_content: content,
// 			post_image: information[i].post_image
// 					});
// 				}
// 				dispatch({
// 					type: HOME_WEB_POSTS,
// 					payload: posts
// 				});
// 		})
// 		.catch(error => {
// 			dispatch({
// 				type: HOME_WEB_POSTS,
// 				payload: []
// 			});
// 			// console.error(error);
// 		});
// 		// axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + INSTAGRAM_ACCESS_TOKEN + '&count=4', {
// 		// 	params: {}
// 		// })
// 		// .then(response => {
// 		// 	const instagramData = response.data.data;
// 		// 	dispatch({
// 		// 		type: HOME_INSTAGRAM_POSTS,
// 		// 		payload: instagramData
// 		// 	});
// 		// })
// 		// .catch(error => {
// 		// 	dispatch({
// 		// 		type: HOME_INSTAGRAM_POSTS,
// 		// 		payload: error
// 		// 	});
// 		// 	// console.error(error);
// 		// });
// 		};
// };
// export const homeProducts = () => {
// 	return dispatch => {
// 		dispatch({
// 			type: HOME_PRODUCTS,
// 			payload: 'loading'
// 		});
// 		axios.post(BASE_URL +'/api/products', 
// 		{
// 			// 'search_key': data.search_key,
// 			// 'search_value': data.search_value,
// 		},
// 			// method : 'POST',
// 		{
// 			headers : {
// 				'Accept' : 'application/json',
// 				'Content-Type' : 'application/json',
// 				// 'origin': 'http://arzhin.shop'
// 			}
// 		})
// 		.then((response) => {
// 			// console.log(response.data.data);
// 			if (response.data.data.length==0){
// 				dispatch({
// 					type: HOME_PRODUCTS,
// 					payload: []
// 				});
// 			}else{
// 				const data = response.data.data;
// 				let results = [];
// 				for (let i = 0; i < data.length; i++) {
// 					results.push({
// 						author_name: data[i].author.name,
// 						author_picture: data[i].author.profile_picture,
// 						author_phone_number: data[i].author.phone_number,
// 						code_product: data[i].code_product,
// 						title_product: data[i].title_product,
// 						description: data[i].description,
// 						product_status: data[i].product_status,
// 						total_product: data[i].total_product,
// 						total_product_flag:data[i].total_product_flag,
// 						pk_price: data[i].pk_price,
// 						pk_price_flag:data[i].pk_price_flag,
// 						score: data[i].score,
// 						tag: data[i].tag,
// 						thumbnail: data[i].thumbnail[0],
// 						create_at: data[i].create_at,
// 						});
// 				}
// 				dispatch({
// 					type: HOME_PRODUCTS,
// 					payload: results
// 				});
// 			}
// 		})
// 	.catch(error => {
// 		if (err.response) {
// 			// The client was given an error response (5xx, 4xx)
// 			console.log(err.response.data);
// 			console.log(err.response.status);
// 			console.log(err.response.headers);
// 		} else if (err.request) {
// 			// The client never received a response, and the request was never left
// 		} else {
// 			// Anything else
// 		}
// 	//   console.error(error);
// 	});
	
// 	}
// }
