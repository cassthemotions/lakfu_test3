import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Import styles
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/scss/paper-kit.scss";
import "../src/assets/demo/demo.css";

// Import queries

//import pages
// import Index from "pages/Index.js";
// import NucleoIcons from "pages/NucleoIcons.js";
import LandingPage from "../src/pages/LandingPage.js";
import SignUp from "../src/pages/SignUp.js";
//import App from "../src/App.js";
/* import ProfilePage from "pages/examples/ProfilePage.js";
import RegisterPage from "pages/examples/RegisterPage.js";*/

Amplify.configure(awsmobile);

ReactDOM.render(
  /*<App />*/
  <BrowserRouter>
    <Switch>
      <Route
        path="/index" render={props =><LandingPage {...props} />} />
      <Route
        path="/signup" render={props => <SignUp {...props} />} />
    <Redirect to="/index" />

    </Switch>
  </BrowserRouter>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
