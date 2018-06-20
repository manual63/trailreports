import React from 'react';

import styles from './style.less';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <header className={styles.header}>
                    <h1 className="text-center">Trail Reports</h1>
                </header>
                {/* Routes cause components to render here */}
                {this.props.children}
            </div>
        );
    }
}

export default Layout;