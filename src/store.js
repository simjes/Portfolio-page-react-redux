import {createStore, compose, applyMiddleware} from 'redux';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';
import rootReducer from './reducers/rootReducers';

//get the data from DHIS2 webapi, put in default state? Do in component?

const defaultState = {
    //overview: fakeData
};
const middleware = routerMiddleware(browserHistory);
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);


const store = createStore(rootReducer, defaultState, applyMiddleware(middleware));

export const history = syncHistoryWithStore(browserHistory, store);
export default store;