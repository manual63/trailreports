import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout';

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<Layout />, wrapper) : false;

