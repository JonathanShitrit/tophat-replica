import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Signup from "./components/Signup";
import Header from "./components/Header";


import App from './components/App';
import './index.css';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            {/* Collection of Route components */}
            <Route exact path="/" render={() => <App />} />
            {/* <Route path="/sign-in" render={() => <Header><Signin /></Header>} /> */}
            {/* <Route path="/sign-up" render={() => <Header><Signup /></Header>} /> */}
        </Switch>
    </Router>,
    document.getElementById('root'));
