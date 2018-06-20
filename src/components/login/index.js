import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <div className="row">
                    <div className="col-xs-3 text-right">
                        Username:
                    </div>
                    <div className="col-xs-9">
                        <input type="text" id="username" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-3 text-right">
                        Password:
                    </div>
                    <div className="col-xs-9">
                        <input type="password" id="password" />
                    </div>
                </div>
                <div>
                    <button>Sign In</button>
                </div>
            </div>
        );
    }
}

export default Login;