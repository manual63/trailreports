import React from 'react';

import styles from './styles.less';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeNav: 'reports'
        }
    }

    render() {
        const pathName = this.props.location.pathname;

        return (
            <div>
                <div className={styles.navWrapper}>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className={`nav-link ${pathName === '/reports' || pathName === '/dashboard' ? 'active' : ''}`} href="#/reports">Reports</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${pathName === '/create' ? 'active' : ''}`} href="#/create">Create</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${pathName === '/trailconditions' ? 'active' : ''}`} href="#/trailconditions">Trail Conditions</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${pathName === '/settings' ? 'active' : ''}`} href="#/settings">Settings</a>
                        </li>
                    </ul>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Dashboard;