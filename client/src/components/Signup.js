import React, { Component } from "react";

class Signup extends Component {

    render() {
        return (
            <div className="auth-signup">
                <form className="my-form" onSubmit={this.props.onSignup}>
                    <h2>Sign up</h2>

                    <div className="form-group">
                        <label>Full name</label>
                        <input type="text" onChange={this.props.changeHandler} name="name" className="form-control" placeholder="Full name" />
                    </div>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" onChange={this.props.changeHandler} name="username" className="form-control" placeholder="Username" />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" onChange={this.props.changeHandler} name="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>What type of user are you?</label>
                        <div className="custom-control custom-checkbox">
                            <input type="radio" id="instructor" style={{ margin: 2 }} onClick={this.props.changeHandler} name="usertype" value="instructor" />
                            <label htmlFor="instructor" style={{ margin: 2, marginRight: 10 }}>Instructor</label>
                            <input type="radio" id="student" style={{ marginLeft: 10 }} onClick={this.props.changeHandler} name="usertype" value="student" />
                            <label htmlFor="student" style={{ margin: 2 }}>Student</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={this.props.changeHandler} name="password" className="form-control" placeholder="Enter password" />
                    </div>




                    <button type="submit" className="btn btn-primary btn-block btn-lg">Sign up</button>
                    <p className="forgot-password text-right">
                        Already registered <button onClick={this.props.toggelSignin}>sign in</button>
                    </p>
                </form>
            </div>
        )
    }
}

export default Signup;