import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Landing from './Landing/Landing';
import Messages from './Messages/Messages';
import AddMessage from './AddMessage/AddMessage';
import './App.css'


class App extends Component {

  state = {
    messages: []
  }

  componentDidMount() {
    //dummy data loading
    let { messages } = this.props
    setTimeout(()=> this.setState({messages}), 600);
  }

  render() {
    console.log('messages', this.state.messages)

    const { messages } = this.state;
    return (
      <div className='App'>
        <Route
          exact
          path='/'
          component={Landing}
        />
        <Route
          exact
          path='/messages'
          render={routeProps => (
            <Messages
              messages={messages}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path='/add-message'
          component={AddMessage}
        />
      </div>
    );
  }
}

export default App;