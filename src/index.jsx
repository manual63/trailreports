import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './components/layout';
import Landing from './components/landing';
import Site from './components/site';
import Home from './components/site/home';
import About from './components/site/about';
import Future from './components/site/future';
import CreateAccount from './components/site/createAccount';
import Login from './components/site/login';
import TrailConditions from './components/site/trailconditions';
import Dashboard from './components/dashboard';
import Reports from './components/dashboard/reports';
import Create from './components/dashboard/create';
import UpdateConditions from './components/dashboard/updateconditions';
import Settings from './components/dashboard/settings';

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Landing} />
            <Route path="/site" component={Site}>
                <IndexRoute component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/future" component={Future} />
                <Route path="/createaccount" component={CreateAccount} />
                <Route path="/login" component={Login} />
                <Route path="/trailconditions" component={TrailConditions} />
            </Route>
            <Route path="/dashboard" component={Dashboard}>
                <IndexRoute component={Reports} />
                <Route path="/reports" component={Reports} />
                <Route path="/create" component={Create} />
                <Route path="/updateconditions" component={UpdateConditions} />
                <Route path="/settings" component={Settings} />
            </Route>
        </Route>
    </Router>
), wrapper) : false;
