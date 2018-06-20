import React from 'react';

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
        //TODO: Send credentials to a secure login process 
        console.log(this.state);
    }

    render() {
        return (
            <div>
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