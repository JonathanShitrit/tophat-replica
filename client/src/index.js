import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Help from "./components/Help";
import App from './components/App';
import './index.css';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            {/* Collection of Route components */}
            <Route exact path="/" render={() => <App />} />
            <Route path="/help" render={() => <Header><Help /></Header>} />
            <Route path="/about" render={() => <Header><About /></Header>} />
            <Route path="/contact" render={() => <Header><Contact /></Header>} />

            {/* <Route path="/sign-in" render={() => <Header><Signin /></Header>} /> */}
            {/* <Route path="/sign-up" render={() => <Header><Signup /></Header>} /> */}
        </Switch>
    </Router>,
    document.getElementById('root'));
