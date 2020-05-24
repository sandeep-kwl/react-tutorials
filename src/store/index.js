import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

// const initialState = {};

const store = createStore(reducers, applyMiddleware(thunk));
// const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;
