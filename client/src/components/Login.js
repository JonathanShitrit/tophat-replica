import React, { Component } from "react";
import axios from "axios";
import Signin from "./Signin";
import Signup from "./Signup";


class Login extends Component {
    state = { isSigninVisible: false, showWarning: false, user: {}, name: "", email: "", username: "", usertype: "", password: "" };

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
        this.setState({ [e.target.name]: e.target.value });
    }

    onSignup = () => {
        event.preventDefault();

        axios.post(`${document.location.origin}/api/users/register`, {
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
            console.log(response);
            this.props.appCallback(response, response.data);
        }).catch(error => {
            console.log(error.response)
        });
    }

    onLogin = event => {
        event.preventDefault();

        axios.post(`${document.location.origin}/api/users/login`, {
            username: this.state.username,
            password: this.state.password
        }, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(response => {
            console.log(response)
            this.props.appCallback(response, response.data);
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
                    <Signin
                        changeHandler={this.changeHandler}
                        toggelSignin={this.toggelSignin}
                        onLogin={this.onLogin}
                    />
                ) : (
                        <Signup
                            changeHandler={this.changeHandler}
                            toggelSignin={this.toggelSignin}
                            onSignup={this.onSignup}
                        />
                    )
                }
            </div>
        )
    }

}


export default Login;
