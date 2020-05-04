import React, { Component } from "react";

class Login extends Component {
    state = { isSigninVisible: false };

    toggelSignin = () => {
        this.setState({ isSigninVisible: !this.state.isSigninVisible });
    };

    render() {
        return (
            <div className="auth-wrapper">
                <h2>Indelible Interactive</h2>


                {this.state.isSigninVisible ? (
                    <div className="auth-signin">
                        <form>
                            <h2>Sign in</h2>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block btn-lg">Sign in</button>
                            <p className="forgot-password text-right">
                                Don't have an account <button onClick={this.toggelSignin}>sign up</button>
                            </p>
                        </form>
                    </div>
                ) : (
                        <div className="auth-signup">
                            <form>
                                <h2>Sign up</h2>

                                <div className="form-group">
                                    <label>First name</label>
                                    <input type="text" className="form-control" placeholder="First name" />
                                </div>

                                <div className="form-group">
                                    <label>Last name</label>
                                    <input type="text" className="form-control" placeholder="Last name" />
                                </div>

                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" placeholder="Enter email" />
                                </div>

                                <div className="form-group">
                                    <label>What typ of user are you?</label>
                                    <div className="custom-control custom-checkbox">
                                        <input type="radio" id="instructor" style={{ margin: 2 }} name="user-type" value="instructor" />
                                        <label htmlFor="instructor" style={{ margin: 2, marginRight: 10 }}>Instructor</label>
                                        <input type="radio" id="student" style={{ marginLeft: 10 }} name="user-type" value="student" />
                                        <label htmlFor="student" style={{ margin: 2 }}>Student</label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password" />
                                </div>

                                <button type="submit" className="btn btn-primary btn-block btn-lg">Sign up</button>
                                <p className="forgot-password text-right">
                                    Already registered <button onClick={this.toggelSignin}>sign in</button>
                                </p>
                            </form>
                        </div>
                    )
                }
            </div>
        )
    }

}


export default Login;