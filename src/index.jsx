import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import Layout from './components/layout';
import Login from './components/login';

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <Route path="/login" component={Login} />
        </Route>
    </Router>
), wrapper) : false;
