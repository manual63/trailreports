import React from 'react';

import styles from './styles.less';

class Landing extends React.Component {
    constructor(props) {
        super(props);

        this.goToLogin = this.goToLogin.bind(this);
    }

    goToLogin() {
        this.props.router.push('/login');
    }

    render() {
        return (
            <div className={styles.landingWrapper}>
                <div className={styles.intro}>
                    <p>Welccome to the Trail Reporting App!</p>
                </div>
                <div className={styles.signInWrapper}>
                    <button onClick={this.goToLogin}>Sign In</button>
                </div>
            </div>
        );
    }
}

export default Landing;