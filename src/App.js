//imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import logo from './logo.svg';
import './index.css';
import './App.css';

import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';

import API, { graphqlOperation } from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';
import { createTodo } from './graphql/mutations';

import { useEffect, useReducer } from 'react' // using hooks
import { listTodos } from './graphql/queries'

// OAuth Imports
import OAuthButton from './auth/OAuthButton';

import config from './aws-exports';

import LandingPage from "../src/pages/LandingPage.js";

require('dotenv').config()

const initialState = {todos:[]};
const reducer = (state, action) =>{
  switch(action.type){
    case 'QUERY':
      return {...state, todos:action.todos}
    case 'SUBSCRIPTION':
      return {...state, todos:[...state.todos, action.todo]}
    default:
      return state
  }
}

Amplify.configure(awsconfig);
API.configure(config);             // Configure Amplify
PubSub.configure(config);

async function createNewTodo() {
  const todo = { name: "Use AppSync" , description: "Realtime and Offline"}
  await API.graphql(graphqlOperation(createTodo, { input: todo }))
}

function App() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
    getData()
  }, [])

    async function getData() {
      const todoData = await API.graphql(graphqlOperation(listTodos))
      dispatch({type:'QUERY', todos: todoData.data.listTodos.items});
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={createNewTodo}>Add Todo</button>
      </header>
      <div>{ state.todos.map((todo, i) => <p key={todo.id}>{todo.name} : {todo.description}</p>) }</div>
    </div>
  );
}

export default withAuthenticator(App, true);
