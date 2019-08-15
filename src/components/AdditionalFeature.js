import React from 'react';

const AdditionalFeature = props => {
	const handleClick = e => {
		e.stopPropagation();
		props.addFeature(props.feature);
	};

	return (
		<li>
			{/* Add an onClick that will let you add a feature to your car */}
			{/* <form onsubmit={e => e.stopPropagation}> */}
			<button className="button" type="submit" onClick={handleClick}>
				Add
			</button>
			{/* </form> */}
			{props.feature.name} (+{props.feature.price})
		</li>
	);
};

export default AdditionalFeature;

// const mapStateToProps = state => {
// 	return {
// 		car: {
// 			features: state.car.features
// 		},
// 		store: {
// 			id: state.store.id,
// 			name: state.store.name
// 		}
// 	};
// };

// export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
