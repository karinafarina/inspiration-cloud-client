import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Landing from './Landing/Landing';
import Messages from './Messages/Messages';
import AddMessage from './AddMessage/AddMessage';
import MessagesContext from './MessagesContext';
import config from './config';
import './App.css'


class App extends Component {

  state = {
    messages: [],
    error: null,
  }

  addMessage = message => {
    this.setState({
      messages: [ ...this.state.messages, message ],
    })
  }

  componentDidMount() {
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    }
    fetch(config.API_BASE_URL, options)
      .then(res => {
        if(!res.ok) {
          return res.json().then(error => {
            throw error
          })
        }
        return res.json()
      })
      .then(messages => {
        this.setState({
          messages: messages
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    const contextValue = {
      messages: this.state.messages,
      addMessage: this.addMessage,
    }

    return (
      <div className='App'>
        <MessagesContext.Provider value={contextValue}>
          <Route
            exact
            path='/'
            component={Landing}
          />
          <Route
            exact
            path='/messages'
            component={Messages}
          />
          <Route
            exact
            path='/add-message'
            component={AddMessage}
          />
        </MessagesContext.Provider>
      </div>
    );
  }
}

export default App;