import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import projects from './projects';

const rootReducer = combineReducers({data: projects, routing: routerReducer});

export default rootReducer;