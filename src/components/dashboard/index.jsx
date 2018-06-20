import React from 'react';

import styles from './styles.less';

class Dashboard extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className={styles.navWrapper}>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link active" href="#/reports">Reports</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/create">Create</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/trailconditions">Trail Conditions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/settings">Settings</a>
                        </li>
                    </ul>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Dashboard;