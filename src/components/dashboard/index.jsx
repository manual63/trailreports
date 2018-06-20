import React from 'react';

import styles from './styles.less';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeNav: 'reports'
        }
    }

    componentDidUpdate() {
        console.log(this.props.location.pathname);
        this.setActiveNav(this.props.location.pathname);
    }

    setActiveNav(pathname) {
        switch(pathname) {
            case '/reports':
                this.setState({activeNav: 'reports'});
                break;
            case '/create':
                this.setState({activeNav: 'create'});
                break;
        }
    }

    render() {
        const activeNav = this.state.activeNav;

        return (
            <div>
                <div className={styles.navWrapper}>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className={`nav-link ${activeNav === 'reports' ? 'active' : ''}`} href="#/reports">Reports</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeNav === 'create' ? 'active' : ''}`} href="#/create">Create</a>
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