import React, { Component } from "react";

class Signup extends Component {

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h2>Indelible Interactive</h2>

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
                                <label for="instructor" style={{ margin: 2, marginRight: 10 }}>Instructor</label>
                                <input type="radio" id="student" style={{ marginLeft: 10 }} name="user-type" value="student" />
                                <label for="student" style={{ margin: 2 }}>Student</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block btn-lg">Sign up</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="#">sign in?</a>
                        </p>
                    </form>
                </div>
            </div>
        )
    }

}


export default Signup;