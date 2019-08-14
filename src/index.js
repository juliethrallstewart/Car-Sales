import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { featureReducer } from './reducers';

import 'bulma/css/bulma.css';
import './styles.scss';

export const store = createStore(featureReducer);
console.log('this is the store', store);

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);
