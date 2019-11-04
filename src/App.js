import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import logo from './logo.svg';
import './index.css';
import './App.css';


import { Rehydrated } from 'aws-appsync-react'
import { ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import Amplify, { Auth, Hub } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';

import API, { graphqlOperation } from '@aws-amplify/api';
import awsmobile from './aws-exports';
import PubSub from '@aws-amplify/pubsub';
import { createInvestor } from './graphql/mutations';

import { useEffect, useReducer } from 'react' // using hooks

// OAuth Imports
import OAuthButton from './auth/OAuthButton';
import config from './aws-exports';
import LandingPage from "../src/pages/LandingPage.js";
import ApolloClient from "apollo-boost";

// Import JS Files
import Entrepreneur from './pages/Entrepreneur'
import CreateEntrepreneur from './pages/CreateEntrepreneur'
import CreateEntrepreneurHeader from './Headers/CreateEntrepreneurHeader'

// Import graphQL
import * as queries from './graphql/queries'
import * as mutations from './graphql/mutations'

class App extends Component {
  state = {
    entrepreneurs: [],
    showCreateEntrepreneur: false
  }
  async componentDidMount() {
    try {
      const entrepreneurData = await API.graphql(graphqlOperation(queries.getEntrepreneur))
      const { data: {getEntrepreneur: { items }}} = entrepreneurData
      this.setState({ entrepreneurs: items })
    } catch(err) {
      console.log('error: ', err)
    }
  }

  createEntrepreneur = async(entrepreneur) => {
    this.setState({
      entrepreneurs: [...this.state.entrepreneurs, entrepreneur]
    })
    try {
      await API.graphql(graphqlOperation(
        mutations.createEntrepreneur,
        {input: entrepreneur}
      ))
    } catch(err) {
      console.log('error creating entrepreneur: ', err)
    }
  }

  showCreateEntrepreneur = () => {
    this.setState({ showCreateEntrepreneur: true})
  }

  render() {
    return (
      <div>
        <CreateEntrepreneurHeader showCreateEntrepreneur={this.showCreateEntrepreneur} />
        <Entrepreneur
          entrepreneurs={this.state.entrepreneurs}
          />
        {
          this.state.showCreateEntrepreneur && (
            <CreateEntrepreneur
              createEntrepreneur={this.createEntrepreneur}
              closeModal={this.closeModal}
              />
          )
        }
      </div>
    );
  }
}
/*function App() {
  return (
    <div className="App">

    </div>
  );
}*/


export default withAuthenticator(App, true);
