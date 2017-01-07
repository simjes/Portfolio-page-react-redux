import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import overview from './overview';

const rootReducer = combineReducers({overview, routing: routerReducer});

export default rootReducer;