import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Instructor from './Instructor';

class App extends Component {
  // use fetch(`${document.location.origin}/)

  authCallback = (response, data) => {
    if (response.status == 201 || response.status == 200) {
      window.localStorage.setItem("authenticatedUser", data.username);
      window.localStorage.setItem("authenticatedUsertype", data.usertype);
      window.location.reload(true);
    }
  }

  isAuthenticated() {
    if (window.localStorage.getItem("authenticatedUser") !== null &&
      window.localStorage.getItem("authenticatedUsertype") !== null) {
      return true;
    }
    else {
      return false;
    }

  }
  isInstructor = () => {
    if (window.localStorage.getItem("authenticatedUsertype") == "instructor") {
      console.log(window.localStorage.getItem("authenticatedUsertype"));
      return true;
    }
    else if (window.localStorage.getItem("authenticatedUsertype") == "student") {
      console.log(window.localStorage.getItem("authenticatedUsertype"));
      return false;
    }

  }

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        {this.isAuthenticated() ? (
          this.isInstructor() ? (
            <Instructor />
          ) : (
              console.log("navigate to student page")
              // <Login appCallback={this.authCallback} />
            )
        ) : (
            <Login appCallback={this.authCallback} />
          )
        }
      </div>

    );
  }
}

export default App;
