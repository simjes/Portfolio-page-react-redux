import React from 'react';
import ReactDOM from 'react-dom';
import AppConnector from './components/connectors/AppConnector';
import './index.css';
import {Router, Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';
import ProjectsOverview from './components/projectsOverview/ProjectsOverview';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={AppConnector}>
                <IndexRoute component={ProjectsOverview}>

                </IndexRoute>
                {/*<Route path="/view/:projectId" component={testCom}>

                </Route>
                */}
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(
    router,
    document.getElementById('root')
);