import React from 'react';

import Landing from '../landing';

import styles from './style.less';

class Layout extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <header className={styles.header}>
                    <h1 className="text-center">Trail Reports</h1>
                </header>
                <Landing />
            </div>
        );
    }
}

export default Layout;