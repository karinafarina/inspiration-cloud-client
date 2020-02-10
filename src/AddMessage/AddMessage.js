import React, { Component } from 'react';
import config from '../config';
import MessagesContext from '../MessagesContext'
import './AddMessage.css';

export class AddMessage extends Component {

  static contextType = MessagesContext;

  state = {
    error: null,
  };

  handleSubmit = (message, callback) => {
    this.setState({ error: null })
    fetch(config.API_BASE_URL, {
      method: 'POST',
      body: JSON.stringify(message),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if(!res.ok) {
        return res.json().then(error => Promise.reject(error))
      }
      return res.json()
    })
    .then(data => {
      callback(data)
      this.context.addMessage(data)
      this.props.history.push('/messages')
    })
    .catch(error => {
      console.log(error)
      this.setState({ error })
    })
  }

  render() {
    return (
      <div className="add-message">
        <form className="add" onSubmit={this.handleSubmit}>
          <h3>Add Your encouraging or inspirational message here</h3>
          <input className="input" type="text" />
          <input type="submit" />
          {/* ON SUBMIT, ADD MESSAGE TO DATABASE */}
        </form>
      </div>
    )
  }
}

export default AddMessage
