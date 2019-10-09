import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { featureReducer } from './reducers';

import 'bulma/css/bulma.css';
import './styles.scss';

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

// export const store = createStore(featureReducer);
const store = createStore(featureReducer, composeEnhancers());

console.log('this is the store', store);

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);
