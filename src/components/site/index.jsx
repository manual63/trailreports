import React from 'react';

import styles from './styles.less';

class Site extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeNav: 'home'
        }
    }

    render() {
        const pathName = this.props.location.pathname;

        return (
            <div>
                <div className={styles.navWrapper}>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className={`nav-link ${pathName === '/site' || pathName === '/home' ? 'active' : ''}`} href="#/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${pathName === '/about' ? 'active' : ''}`} href="#/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${pathName === '/future' ? 'active' : ''}`} href="#/future">Future Features</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${pathName === '/createaccount' ? 'active' : ''}`} href="#/createaccount">Create Account</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${pathName === '/login' ? 'active' : ''}`} href="#/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${pathName === '/trailconditions' ? 'active' : ''}`} href="#/trailconditions">Trail Conditions</a>
                        </li>
                    </ul>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Site;