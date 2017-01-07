import {createStore, compose, applyMiddleware} from 'redux';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';
import rootReducer from './reducers/rootReducers';
import thunk from 'redux-thunk';

//get the data from DHIS2 webapi, put in default state? Do in component?
const api = "https://api.cosmicjs.com/v1/simjes-portfolio/object-type/projectdetails?pretty=true&hide_metafields=true";
const defaultState = {
    //overview: "toys"
};
const middlewareRouter = routerMiddleware(browserHistory);
/*const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, defaultState, composeEnhancers(applyMiddleware(middlewareRouter, thunk.withExtraArgument(api))));

//const store = createStore(rootReducer, defaultState, applyMiddleware(middlewareRouter, thunk.withExtraArgument(api)));

export const history = syncHistoryWithStore(browserHistory, store);
export default store;