import {createStore, compose, applyMiddleware} from 'redux';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';
import rootReducer from './reducers/rootReducers';
import thunk from 'redux-thunk';

const api = "https://api.cosmicjs.com/v1/simjes-portfolio/object-type/projectdetails?pretty=true&hide_metafields=true";
const defaultState = {
    data: {
        projects: [],
        isFetching: false,
        doneLoading: false
    }
};
const middlewareRouter = routerMiddleware(browserHistory);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, defaultState, composeEnhancers(applyMiddleware(middlewareRouter, thunk.withExtraArgument(api))));

export const history = syncHistoryWithStore(browserHistory, store);
export default store;