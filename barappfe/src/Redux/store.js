import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { products } from './reducers/products.reducer';
import { order } from './reducers/order.reducer';
import thunk from 'redux-thunk';

const reducers = {
    products,
    order
};

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f))