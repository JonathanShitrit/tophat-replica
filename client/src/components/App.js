import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Instructor from './Instructor';

class App extends Component {

  // use fetch(`${document.location.origin}/)


  render() {
    return (

      // <Login />
      <Instructor />

    );
  }
}

export default App;
