export const addFeature = item => {
	console.log('add feature was invoked');
	return { type: 'ADD_FEATURE', payload: item };
};

export const removeFeature = item => {
	console.log('remove feature was invoked');
	return { type: 'REMOVE_FEATURE', payload: item };
};
