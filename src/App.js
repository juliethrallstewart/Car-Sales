import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';

import * as actions from './actions';

const App = props => {
	const { car, store, additionalPrice } = props;

	const removeFeature = item => {
		props.removeFeature(item);
	};

	const addFeature = item => {
		props.addFeature(item);
		console.log('you clicked me');
	};

	return (
		<div className="boxes">
			<div className="box">
				<Header car={car} />
				<AddedFeatures car={car} removeFeature={removeFeature} />
			</div>
			<div className="box">
				<AdditionalFeatures store={store} addFeature={addFeature} />
				<Total additionalPrice={additionalPrice} car={car} />
			</div>
		</div>
	);
};

// const mapStateToProps = state => {
// 	return {
// 		car: {
// 			name: state.name,
// 			price: state.car.price,
// 			image: state.car.image,
// 			features: [ ...state.car.features ] || []
// 		}
// 	};
// };

const mapStateToProps = state => state;

export default connect(mapStateToProps, actions)(App);

// return (
//   <div className="boxes">
//     <div className="box">
//       <Header car={state.car} />
//       <AddedFeatures car={state.car} />
//     </div>
//     <div className="box">
//       <AdditionalFeatures store={state.store} />
//       <Total car={state.car} additionalPrice={state.additionalPrice} />
//     </div>
//   </div>
// );
// };
