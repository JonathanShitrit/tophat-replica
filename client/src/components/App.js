import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Instructor from './Instructor';

class App extends Component {
  // use fetch(`${document.location.origin}/)

  authCallback = (response, username) => {
    if (response.status == 201 || response.status == 200) {
      window.localStorage.setItem("authenticatedUser", username);
      window.location.reload(true);
    }
  }



  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        {window.localStorage.getItem("authenticatedUser") !== null ? (
          <Instructor />
        ) : (
            <Login appCallback={this.authCallback} />
          )
        }
      </div>

    );
  }
}

export default App;
