import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
	return (
		<div className="content">
			<h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
		</div>
	);
};

export default Total;

// const mapStateToProps = state => {
// 	return {
// 		additionalPrice: state.store.price || 0,
// 		car: {
// 			price: state.car.price
// 		},
// 		store: {
// 			price: state.store.price
// 		}
// 	};
// };

// export default connect(mapStateToProps)(Total);
