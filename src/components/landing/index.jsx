import React from 'react';

import styles from './styles.less';

class Landing extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={styles.landingWrapper}>
                <div className={styles.intro}>
                    <p>Welccome to the Trail Reporting App!</p>
                </div>
                <div className={styles.signInWrapper}>
                    <button>Sign In</button>
                </div>
            </div>
        );
    }
}

export default Landing;