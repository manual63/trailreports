import React from 'react';

import styles from './styles.less';

class CreateAccount extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={styles.content}>
                <h2>Create Account</h2>
            </div>
        );
    }
}

export default CreateAccount;