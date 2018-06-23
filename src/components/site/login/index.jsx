import React from 'react';

import LoginUtils from '../../../utilities/loginUtils';

import styles from './styles.less';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        const loginUtils = new LoginUtils();
        // submitCredentials will use fetch and return a promise
        loginUtils.submitCredentials(this.state.username, this.state.password);

        // Once promise returns go to reports view
        this.goToDashboard();
    }

    goToDashboard() {
        this.props.router.push('/dashboard');
    }

    render() {
        return (
            <div className={styles.content}>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-xs-3 text-right">
                            Username:
                        </div>
                        <div className="col-xs-9">
                            <input type="text" name="username" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-3 text-right">
                            Password:
                        </div>
                        <div className="col-xs-9">
                            <input type="password" name="password" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div>
                        <button>Sign In</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;