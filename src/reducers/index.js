const initialState = {
	additionalPrice: 0,
	car: {
		price: 26395,
		name: '2019 Ford Mustang',
		image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
		features: []
	},
	store: [
		{ id: 1, name: 'V-6 engine', price: 1500 },
		{ id: 2, name: 'Racing detail package', price: 1500 },
		{ id: 3, name: 'Premium sound system', price: 500 },
		{ id: 4, name: 'Rear spoiler', price: 250 }
	]
};

export const featureReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_FEATURE':
			console.log("I'm ADD_FEATURE from the switch!");
			//add the feature to the features array in car.features
			//remove the item from store
			//calculate the new cost with the additional feature
			return {
				...state,
				car: {
					...state.car,
					features: [ ...state.car.features, action.payload ]
				},
				store: state.store.filter(feature => feature.id !== action.payload.id),
				additionalPrice: state.additionalPrice + action.payload.price
			};
		case 'REMOVE_FEATURE':
			console.log("I'm REMOVE_FEATURE from the switch!!");
			//remove the feature from car.features
			//add the feature back into the store
			//calculate the cost minus the removed feature
			return {
				...state,
				car: {
					...state.car,
					features: state.car.features.filter(({ id }) => id !== action.payload.id)
				},
				store: [ ...state.store, action.payload ],
				additionalPrice: state.additionalPrice - action.payload.price
			};
		default:
			return state;
	}
};
