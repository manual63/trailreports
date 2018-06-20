import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './components/layout';
import Landing from './components/landing';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Reports from './components/dashboard/reports';
import Create from './components/dashboard/create';

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard}>
                <IndexRoute component={Reports} />
                <Route path="/reports" component={Reports} />
                <Route path="/create" component={Create} />
            </Route>
        </Route>
    </Router>
), wrapper) : false;
