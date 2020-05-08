import React, { Component } from "react";
import axios from "axios";

const Warning = () => (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
)

// const initialState = {
//     showWarning: false, user: {}, : "", : "", : "", : ""
// }

class Login extends Component {
    state = { isSigninVisible: false, showWarning: false, user: {}, name: "", email: "", username: "", usertype: "", password: "" };

    // {
    //     "name": "jonathan",
    //     "email": "jon@gmail.com",
    //     "username": "Jons",
    //     "usertype": "student",
    //     "password": "1234"
    // }

    clearState = () => {
        this.setState({ name: "" });
        this.setState({ email: "" });
        this.setState({ username: "" });
        this.setState({ usertype: "" });
        this.setState({ password: "" });
        document.getElementsByClassName("my-form")[0].reset();
    }


    toggelSignin = () => {
        this.setState({ isSigninVisible: !this.state.isSigninVisible });
        this.clearState();
    };


    toggelWarning = () => {
        this.setState({ showWarning: !this.state.showWarning });
    };

    changeHandler = (e) => {
        // const field = e.target.name;
        this.setState({ [e.target.name]: e.target.value });
    }

    onSignup = event => {
        event.preventDefault();

        // axios({
        //     method: "POST",
        //     url: "/api/users/register",
        //     headers: {
        //         'Content-Type': 'application/json; charset=UTF-8'
        //     },
        //     data: {
        //         name: this.state.name,
        //         email: this.state.email,
        //         username: this.state.username,
        //         usertype: this.state.usertype,
        //         password: this.state.password
        //     }
        // }).then(response => {
        //     console.log(response)
        // })
        //     .catch(error => {
        //         console.log(error.response)
        //     });


        axios.post('/api/users/register', {
            name: this.state.name,
            email: this.state.email,
            username: this.state.username,
            usertype: this.state.usertype,
            password: this.state.password
        }, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error.response)
        });
    }

    onLogin = event => {
        event.preventDefault();

        axios.post('/api/users/login', {
            username: this.state.username,
            password: this.state.password
        }, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error.response)
        });

        // if 404 display invalid username or password
        // if 503 service unavailable
    }


    render() {
        return (
            <div className="auth-wrapper">
                <h2>Indelible Interactive</h2>


                {this.state.isSigninVisible ? (
                    <div className="auth-signin">
                        <form className="my-form" onSubmit={this.onLogin}>
                            <h2>Sign in</h2>

                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" onChange={this.changeHandler} name="username" className="form-control" placeholder="Enter username" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" onChange={this.changeHandler} name="password" className="form-control" placeholder="Enter password" />
                            </div>

                            {this.state.showWarning ? (
                                <Warning />
                            ) : (<div></div>)}

                            <button type="submit" className="btn btn-primary btn-block btn-lg">Sign in</button>
                            <p className="forgot-password text-right">
                                Don't have an account <button onClick={this.toggelSignin}>sign up</button>
                            </p>
                        </form>
                    </div>
                ) : (

                        <div className="auth-signup">
                            <form className="my-form" onSubmit={this.onSignup}>
                                <h2>Sign up</h2>

                                <div className="form-group">
                                    <label>Full name</label>
                                    <input type="text" onChange={this.changeHandler} name="name" className="form-control" placeholder="Full name" />
                                </div>

                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" onChange={this.changeHandler} name="username" className="form-control" placeholder="Username" />
                                </div>

                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" onChange={this.changeHandler} name="email" className="form-control" placeholder="Enter email" />
                                </div>

                                <div className="form-group">
                                    <label>What type of user are you?</label>
                                    <div className="custom-control custom-checkbox">
                                        <input type="radio" id="instructor" style={{ margin: 2 }} onClick={this.changeHandler} name="usertype" value="instructor" />
                                        <label htmlFor="instructor" style={{ margin: 2, marginRight: 10 }}>Instructor</label>
                                        <input type="radio" id="student" style={{ marginLeft: 10 }} onClick={this.changeHandler} name="usertype" value="student" />
                                        <label htmlFor="student" style={{ margin: 2 }}>Student</label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" onChange={this.changeHandler} name="password" className="form-control" placeholder="Enter password" />
                                </div>

                                {this.state.showWarning ? (
                                    <Warning />
                                ) : (<div></div>)}


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
