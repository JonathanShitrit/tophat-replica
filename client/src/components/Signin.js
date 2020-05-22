import React, { Component } from "react";

class Signin extends Component {
    render() {
        return (
            <div className="auth-signin">
                <form className="my-form" onSubmit={this.props.onLogin}>
                    <h2>Sign in</h2>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" onChange={this.props.changeHandler} name="username" className="form-control" placeholder="Enter username" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={this.props.changeHandler} name="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block btn-lg">Sign in</button>

                </form>
                <p className="forgot-password text-right">
                    Don't have an account <button type="button" onClick={this.props.toggelSignin}>sign up</button>
                </p>
            </div>
        )
    }
}

export default Signin;